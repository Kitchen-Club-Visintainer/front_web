import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpClientModule} from "@angular/common/http";
import {FormLoginComponent} from './form-login/form-login.component';
import {RouterOutlet} from "@angular/router";
import {LoginRoutingModule} from "./login-routing.module";
import {HomeRoutingModule} from "../home/home-routing.module";


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet,
    LoginRoutingModule,
    HomeRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
