import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { MenuComponent } from './cabecalho/menu/menu.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent
  ],
  exports: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ]
})
export class HomeModule { }
