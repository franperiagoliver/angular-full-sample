import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthHelper } from '../services/auth.helper';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authHelper: AuthHelper,
    @Inject('LoggerService') private loggerService: LoggerService,
    @Inject('AuthService') private authService: AuthService
  ) { }

  ngOnInit() {
    this.loggerService.log('... initializing header component from core module.');
  }

  isActive(): boolean {
    return this.authHelper.isUserLogged();
  }

  getUser(): string {
    return this.authHelper.getUserLogged();
  }

  onLogout() {
    localStorage.removeItem('language');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
