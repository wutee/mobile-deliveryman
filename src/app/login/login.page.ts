import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onInputChange(ev: Event): void {
    console.log(ev.target);
  }

  onSubmit(): void {
    this.loginService.login(this.username, this.password);
  }

}
