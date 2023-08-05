import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, retry} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {User} from "../shared/models/user.module";
import {Cadastro} from "../shared/models/cadastro.model";
import {FactoryEndpointService} from "../shared/services/factory-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private factoryEndpointService: FactoryEndpointService) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  login(nome: string, senha: string): Observable<any> {
    // return this.http.post(`${environment.apiUrl}/auth`, { nome, senha });
    return this.http.post<any>(`${environment.apiUrl}/auth`, { nome, senha })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    // this.currentUserSubject.next(null);
  }

  //set name user new in storage
  setUserName(username:string){

    localStorage.setItem('username', JSON.stringify(username));

  }

  getUserName(){

    // @ts-ignore
    return JSON.parse(localStorage.getItem('username'));
  }

  cadastrarNovoUsuario(cadastro: Cadastro): Observable<any> {
    return this.http.post<Cadastro>(`${environment.apiUrl}/auth/novoUsuario`, JSON.stringify(cadastro), this.factoryEndpointService.httpOptions)
      // .pipe(
      //   // retry(1),
      //   // catchError(this.factoryEndpointService.errorHandler)
      // )
  }

}
