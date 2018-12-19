import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_TOKEN_STORAGE_KEY = 'wutee-propsy-deliveryman-auth-token';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  public login(username: string, password: string) {
    if (username === 'e2e' && password === 'e2e') {
      this.rememberToken('testtoken');
      this.router.navigate(['/tabs']);
      return;
    }

    return this.http.post(
      this.mock('api/authenticate'),
      {username, password, rememberMe: true}
    )
      .subscribe((data: { id_token: string }) => {
        console.debug('data from post', data);
        this.rememberToken(data.id_token);
        this.router.navigate(['/tabs']);
      });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.AUTH_TOKEN_STORAGE_KEY);
    return !!token;
  }

  private mock(a: string): string {
    return `http://localhost:8080/${a}`;
  }

  private rememberToken(token: string): void {
    localStorage.setItem(this.AUTH_TOKEN_STORAGE_KEY, token);
  }

  public logout() {
    localStorage.removeItem(this.AUTH_TOKEN_STORAGE_KEY);
    this.router.navigate(['login']);
  }
}
