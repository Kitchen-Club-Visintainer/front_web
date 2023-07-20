import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  loading: boolean = false;

  // Buscar os estados no enum do backend
  estados = [
    {id: 1, nome: 'Brasília'},
    {id: 2, nome: 'Goias'}
  ]

}
