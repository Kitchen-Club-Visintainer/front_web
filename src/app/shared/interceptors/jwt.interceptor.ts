import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "../../login/login.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // adiciona o token ao Header, se houver
    let currentUser:any = this.loginService.currentUserValue;

    if (currentUser && currentUser.data.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.data.token}`
        }
      });
    }

    console.log(request);
    return next.handle(request);
  }
}
