import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ingrediente} from "../ingrediente.model";
import {GrupoAlimentar, GrupoAlimentarDesc, GrupoAlimentarDescricao} from "../GrupoAlimentar";
import {IngredientesService} from "../ingredientes.service";
import {LoginService} from "../../../login/login.service";

@Component({
    selector: 'app-update-dialog',
    templateUrl: './update-dialog.component.html',
    styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

    formGroup: FormGroup;
    gruposAlimentares: { codigo: number; descricao: string }[];

    constructor(
        private formBuilder: FormBuilder,
        private service: IngredientesService,
        private authService: LoginService,
        public dialogRef: MatDialogRef<UpdateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { ingrediente: Ingrediente, id: number }) {

        this.formGroup = this.formBuilder.group({
                ingId: [this.data.id, Validators.required],
                ingNome: [this.data.ingrediente.nome, Validators.required],
                ingValorNut: [this.data.ingrediente.valorNutricional, Validators.required],
                ingGrupoAlimentar: [null, Validators.required]
            }
        )

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

        //TODO: buscar ingrediente completo e enviar a atualização

      this.service.atualizarIngrediente(value, this.data.id)
          .subscribe({
              next: (result: Ingrediente) => {
                  console.log(result)
              },
              error: (error) => {
                  this.verificarErroSessao(error);
                  console.log(error);
              },
              complete: () => {
                  this.cleanForm();
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
