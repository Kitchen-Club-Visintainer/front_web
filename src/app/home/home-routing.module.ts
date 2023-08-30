import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}