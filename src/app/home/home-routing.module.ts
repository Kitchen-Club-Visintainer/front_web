import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../shared/guards/auth.guard";
import {IngredientesComponent} from "./ingredientes/ingredientes.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'ingrediente', pathMatch: 'full'},
      {path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
      {path: 'ingrediente', component: IngredientesComponent, canActivate: [AuthGuard]},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
