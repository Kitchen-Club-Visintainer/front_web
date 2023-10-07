import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ingrediente} from "../entity/ingrediente.model";
import {GrupoAlimentar, GrupoAlimentarDesc, GrupoAlimentarDescricao} from "../GrupoAlimentar";
import {IngredientesService} from "../ingredientes.service";
import {LoginService} from "../../../login/login.service";
import {IngredienteDto} from "../entity/ingredienteDto.model";
import {map} from "rxjs";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  formGroup!: FormGroup;
  gruposAlimentares: { codigo: number; descricao: string }[];
  ingredienteSelecionado: IngredienteDto;

  constructor(
    private formBuilder: FormBuilder,
    private service: IngredientesService,
    private authService: LoginService,
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { ingrediente: Ingrediente, id: number }) {

    this.ingredienteSelecionado = {} as IngredienteDto;


    this.formGroup = this.formBuilder.group({
      ingId: [{value: this.data.id, disabled: true}, Validators.required],
      ingNome: [{value: '', disabled: false}, Validators.required],
      ingValorNut: [{value: '', disabled: false}, Validators.required],
      ingGrupoAlimentar: [{value: '', disabled: false}, Validators.required]
    });

    this.service.buscarIngrediente(this.data.id)
      .subscribe((result: IngredienteDto): void => {
        this.ingredienteSelecionado = result;
        this.ingredienteSelecionado.id = this.data.id;


        const nome = {ingNome: this.ingredienteSelecionado.nome};
        const valorNut = {ingValorNut: this.ingredienteSelecionado.valorNutricional};
        const grupoAlimentar = {ingGrupoAlimentar: this.ingredienteSelecionado.grupoAlimentar};
        this.formGroup.patchValue(nome);
        this.formGroup.patchValue(valorNut);
        this.formGroup.patchValue(grupoAlimentar);
      });





    this.gruposAlimentares = Object.values(GrupoAlimentar)
      .filter(v => isNaN(Number(v)))
      .map((item: string | GrupoAlimentar, indice) => ({
        // codigo: (value as GrupoAlimentar),
        codigo: item as GrupoAlimentar,
        descricao: GrupoAlimentarDesc[indice != 8 ? indice + 1 : 99]
      }));
  }

  ngOnInit(): void {
  }

  get ingredientes(): { [key: string]: AbstractControl; } {
    return this.formGroup.controls;
  }

  enviarAtualizacao(): void {
    let value = this.formGroup.value;
    let ingredienteAtualizado: Ingrediente = new Ingrediente(value['ingNome'], value['ingValorNut'], value['ingGrupoAlimentar']);

    this.service.atualizarIngrediente(ingredienteAtualizado, this.data.id)
      .subscribe({
        next: (result: Ingrediente) => {
          console.log(result)
        },
        error: (error) => {
          this.verificarErroSessao(error);
          window.alert('Erro no processamento')
          console.log(error);
        },
        complete: () => {
          this.dialogRef.close();
        }
      });
  }

  cancelar(): void {
    this.dialogRef.close();
    this.cleanForm()
  }

  private verificarErroSessao(error: any): void {
    if (error.status == 403) {
      console.log(error.message);
      this.authService.logout();
      this.reloadPage();
    }
  }

  cleanForm(): void {
    this.formGroup.reset();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
