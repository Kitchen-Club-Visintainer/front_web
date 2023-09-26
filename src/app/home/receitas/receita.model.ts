import {FormControl, FormGroup, Validators} from '@angular/forms';

export class Receita {
  id!: number;
  ingNome!: string;
  ingValorNut!: string;
  quantidade!: number;
  qtdReceita!: number | unknown;

  static asFormGroup(receita: Receita): FormGroup {
    const fg = new FormGroup({
      id: new FormControl(receita.id, Validators.required),
      ingNome: new FormControl(receita.ingNome, Validators.required),
      ingValorNut: new FormControl(receita.ingValorNut, Validators.required),
      quantidade: new FormControl(receita.quantidade, Validators.required),
      qtdReceita: new FormControl(receita.qtdReceita, Validators.required),
    });
    return fg;
  }
}
