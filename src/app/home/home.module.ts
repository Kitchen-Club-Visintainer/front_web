import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MenuComponent} from './cabecalho/menu/menu.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReceitasComponent} from './receitas/receitas.component';
import {IngredientesComponent} from './ingredientes/ingredientes.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {UpdateDialogComponent} from './ingredientes/update-dialog/update-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    CadastroComponent,
    ReceitasComponent,
    IngredientesComponent,
    UpdateDialogComponent
  ],
  exports: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatSortModule,
  ]
})
export class HomeModule { }
