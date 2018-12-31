import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {environment} from '../environments/environment';
import { AuthService } from './auth/auth.service';

@Injectable()
export class PropsyHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeaders = this.authService.isAuthenticated 
    ? {
      headers: req.headers.set('Authorization', this.authService.getHttpToken())
    }
    : {};
    
    const updatedRequest = req.clone({
      ...authHeaders,
      url: `${environment.API_URL}${req.url}`
    });

    console.log('Before making api call : ', updatedRequest);
    return next.handle(updatedRequest)
      .pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              console.log('api call success :', event);
            }
          },
          error => {
            if (event instanceof HttpResponse) {
              console.error('Intercepting error event', error, event);
            }
          }
        )
      );
  }
}
