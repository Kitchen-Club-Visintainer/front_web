import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { MenuComponent } from './cabecalho/menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    CadastroComponent
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
