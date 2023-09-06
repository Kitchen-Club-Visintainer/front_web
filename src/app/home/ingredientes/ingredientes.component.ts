import {Component, OnInit} from '@angular/core';
import {GrupoAlimentar, GrupoAlimentarDesc} from "./GrupoAlimentar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit{

  ingredientesForm!: FormGroup;
  gruposAlimentares: { codigo: number; descricao: string }[];

    constructor(private formBuilder: FormBuilder) {
        this.gruposAlimentares = Object.values(GrupoAlimentar)
            .filter(v => isNaN(Number(v)))
            .map((item:string | GrupoAlimentar, indice) => ({
                // codigo: (value as GrupoAlimentar),
                codigo: item as GrupoAlimentar,
                descricao: GrupoAlimentarDesc[indice != 8 ? indice + 1 : 99]
            }));
    }

    ngOnInit() {
        this.ingredientesForm = this.formBuilder.group({
            ingNome: ['', Validators.required],
            ingValorNut: ['', Validators.required],
        });
    }
}
