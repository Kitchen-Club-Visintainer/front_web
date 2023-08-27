import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // https://cursos.alura.com.br/forum/topico-alguem-sabe-me-dizer-o-porque-de-canload-canactivate-cabactivatechild-entre-outros-estarem-marcados-como-is-deprecated-289843
  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.loginService.currentUserValue) {
      return true;
    }

    // if (tokenValidation) {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    // }
    // return true;
  }
}
