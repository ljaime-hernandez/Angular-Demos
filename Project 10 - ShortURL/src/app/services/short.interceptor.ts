import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '29e778045b25023eba7ac3ff85641e9152f9a83f';

    request = request.clone({ setHeaders: {Authorization: 'Bearer ' + TOKEN}});
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
}
