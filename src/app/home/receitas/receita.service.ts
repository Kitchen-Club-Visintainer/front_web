import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormArray} from '@angular/forms';
import {Receita} from "./receita.model";

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  constructor() {
  }

  private ingredientes: Receita[] = [
    {
      id: 1,
      ingNome: 'Arroz Branco',
      ingValorNut: '10 Kcal/g',
      quantidade: 5,
      qtdReceita: ''
    },
    {
      id: 2,
      ingNome: 'Feijão',
      ingValorNut: '6 Kcal/g',
      quantidade: 2,
      qtdReceita: ''
    },
  ];

  getAll(): Observable<Receita[]> {
    return of(this.ingredientes);
  }

  getAllAsFormArray(): Observable<FormArray> {
    return this.getAll().pipe(map((receita: Receita[]) => {
      const fgs = receita.map(Receita.asFormGroup);
      return new FormArray(fgs);
    }));
  }
}

