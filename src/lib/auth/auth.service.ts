import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_TOKEN_STORAGE_KEY = 'wutee-propsy-deliveryman-auth-token';
  myAccount;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  public me() {
    return this.http.get('api/account')
      .pipe(
        tap(data => this.myAccount = data)
      );
  }

  public whoAmI() {
    return this.myAccount;
  }

  public getHttpToken(): string {
    return `Bearer ${localStorage.getItem(this.AUTH_TOKEN_STORAGE_KEY)}`;
  }

  public login(username: string, password: string) {
    return this.http.post('api/authenticate',
      {username, password, rememberMe: true}
    )
      .subscribe((data: { id_token: string }) => {
        console.debug('data from post', data);
        this.rememberToken(data.id_token);
        this.me().toPromise().then(me => console.log(me));
        this.router.navigate(['/tabs']);
      });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.AUTH_TOKEN_STORAGE_KEY);
    return !!token;
  }

  private rememberToken(token: string): void {
    localStorage.setItem(this.AUTH_TOKEN_STORAGE_KEY, token);
  }

  public logout() {
    localStorage.removeItem(this.AUTH_TOKEN_STORAGE_KEY);
    this.myAccount = undefined;
    this.router.navigate(['login']);
  }
}
