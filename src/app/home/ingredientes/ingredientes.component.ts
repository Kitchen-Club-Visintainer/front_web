import {Component, OnInit, ViewChild} from '@angular/core';
import {GrupoAlimentar, GrupoAlimentarDesc} from "./GrupoAlimentar";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ingrediente} from "./entity/ingrediente.model";
import {IngredientesService} from "./ingredientes.service";
import {LoginService} from "../../login/login.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateDialogComponent} from "./update-dialog/update-dialog.component";
import {IngredienteDto} from "./entity/ingredienteDto.model";
import {MatSort, MatSortable, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  ingredientesForm: FormGroup;
  gruposAlimentares: { codigo: number; descricao: string }[];
  ingredientesCadastrados!: MatTableDataSource<IngredienteDto>;
  displayedColumns: string[] = ['id', 'nome', 'grupo', 'actions'];

  constructor(
    private formBuilder: FormBuilder,
    private ingredienteService: IngredientesService,
    private authService: LoginService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer) {

    this.gruposAlimentares = Object.values(GrupoAlimentar)
      .filter(v => isNaN(Number(v)))
      .map((item: string | GrupoAlimentar, indice) => ({
        codigo: item as GrupoAlimentar,
        descricao: GrupoAlimentarDesc[indice != 8 ? indice + 1 : 99]
      }));

    this.ingredientesForm = this.formBuilder.group({
      ingNome: ['', Validators.required],
      ingValorNut: ['', Validators.required],
      ingGrupoAlimentar: [null, Validators.required]
    });
  }

  annouceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.ingredienteService.buscarTodosingredientes()
      .subscribe({
        next: (result: IngredienteDto[]): void => {
          this.ingredientesCadastrados = new MatTableDataSource<IngredienteDto>(result);
          console.log(this.ingredientesCadastrados);

          // Iniciar o sort assim que a lista é criada
          this.ingredientesCadastrados.sort = this.sort;
          // Definir a direção da classificação para "ascendente"
          this.sort.sort(({ id: 'id', start: 'asc' }) as MatSortable);

        },
        error: (error) => {
          this.verificarErroSessao(error);
          console.log(error);
        }
      });
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
          this.reloadPage();
        }
      });
  }

  atualizarIngrediente(ingrediente: Ingrediente, id: number): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {ingrediente, id},
      height: '550px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadPage();
    });
  }

  excluir(ingrediente: Ingrediente, id: number): void {
    window.alert('Excluindo ingrediente ' + ingrediente.nome);
    this.ingredienteService.excluirIngrediente(id)
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
      }
    );
    this.reloadPage();
  }

  private verificarErroSessao(error: any): void {
    if (error.status == 403) {
      console.log(error.message);
      this.authService.logout();
      this.reloadPage();
    }
  }

  cleanForm(): void {
    this.ingredientesForm.reset();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
