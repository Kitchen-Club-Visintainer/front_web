import { Component } from '@angular/core';

@Component({
  selector: 'menu-drop',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  ativado: boolean = false;

  ativar() {
    this.ativado = !this.ativado;
  }
}
