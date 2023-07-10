import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FormLoginComponent} from "./form-login/form-login.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {LoginComponent} from "./login.component";

// const routes: Routes = [
//   {path: '', component: FormLoginComponent},
//   {path: 'cadastro', component: CadastroComponent}
// ]

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'prefix'},
      {path: 'login', component: FormLoginComponent},
      {path:'cadastro', component: CadastroComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
