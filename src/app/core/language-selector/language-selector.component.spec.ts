import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { createTranslateLoader } from '../../app.translate.factory';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LanguageSelectorComponent } from './language-selector.component';
import { LanguageService } from './language.service';
import { SpinnerService } from '../spinner/spinner.service';
import { AuthHelper } from '../services/auth.helper';
import { MocksUtil } from '../utilities/mocks.util';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  const apiConfig = MocksUtil.createMockedApiConfig();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSelectorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
          }
        }),
        SharedModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: 'api.config', useValue: apiConfig },
        { provide: 'defaultLanguage', useValue: 'en' },
        TranslateService,
        LanguageService,
        SpinnerService,
        AuthHelper
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
