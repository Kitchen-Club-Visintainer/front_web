import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path: 'cadastro', component: CadastroComponent},
  {path: '', component: HomeComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
