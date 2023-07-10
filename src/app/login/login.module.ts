import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpClientModule} from "@angular/common/http";
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {RouterOutlet} from "@angular/router";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
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
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
