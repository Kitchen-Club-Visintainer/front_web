import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { MenuComponent } from './cabecalho/menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReceitasComponent } from './receitas/receitas.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    CadastroComponent,
    ReceitasComponent,
    IngredientesComponent
  ],
  exports: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
