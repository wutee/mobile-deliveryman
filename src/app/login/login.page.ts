import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {AuthService} from '../../lib/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['tabs'])
    }
  }

  onInputChange({target, detail}: KeyboardEvent): void {
    this[(target as any).name] = (detail as any).value;
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password);
  }
}
