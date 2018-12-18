import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../lib/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
