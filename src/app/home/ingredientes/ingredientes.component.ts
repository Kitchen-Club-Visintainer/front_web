import {Component, OnInit} from '@angular/core';
import {GrupoAlimentar, GrupoAlimentarDesc} from "./GrupoAlimentar";
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ingrediente} from "./ingrediente.model";
import {IngredientesService} from "./ingredientes.service";
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit {

  ingredientesForm: FormGroup;
  gruposAlimentares: { codigo: number; descricao: string }[];

  constructor(
    private formBuilder: FormBuilder,
    private ingredienteService: IngredientesService,
    private authService: LoginService) {

    this.gruposAlimentares = Object.values(GrupoAlimentar)
      .filter(v => isNaN(Number(v)))
      .map((item: string | GrupoAlimentar, indice) => ({
        // codigo: (value as GrupoAlimentar),
        codigo: item as GrupoAlimentar,
        descricao: GrupoAlimentarDesc[indice != 8 ? indice + 1 : 99]
      }));

    this.ingredientesForm = this.formBuilder.group({
      ingNome: ['', Validators.required],
      ingValorNut: ['', Validators.required],
      ingGrupoAlimentar: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  get ingredientes(): { [key: string]: AbstractControl; } {
    return this.ingredientesForm.controls;
  }

  cadastrar(): void {
    let nome = this.ingredientes['ingNome'].value;
    let valorNutricional = this.ingredientes['ingValorNut'].value;
    let grupoAlimentar = this.ingredientes['ingGrupoAlimentar'].value;
    let ingrediente: Ingrediente = new Ingrediente(nome, valorNutricional, grupoAlimentar);

    this.ingredienteService.cadastrarIngredientes(ingrediente)
      .subscribe({
        next: (result: Ingrediente) => {
          console.log(result)
        },
        error: (error) => {
          this.verificarErroSessao(error);
          console.log(error);
        },
        complete: () => {
          console.log(nome + valorNutricional + grupoAlimentar);
          this.cleanForm();
        }
      });
  }

  private verificarErroSessao(error: any): void {
    if (error.status == 403) {
      console.log(error.message);
      this.authService.logout();
    }
  }

  cleanForm(): void {
    this.ingredientesForm.reset();
  }

  reloadPage(): void {
    window.location.reload();
  }
}