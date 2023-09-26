import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ReceitaService} from "./receita.service";

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private receitaService: ReceitaService) {

    this.form = this.formBuilder.group({
      albums: this.formBuilder.array([])
    });

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      albums: this.formBuilder.array([])
    });

    this.receitaService.getAllAsFormArray().subscribe(albums => {
      this.form.setControl('albums', albums);
    });
  }

  get albums(): FormArray {
    return this.form.get('albums') as FormArray;
  }

  updateValue(element: FormGroup, event: any): void {
    if (element) {
      const qtdReceitaControl = element.get('qtdReceita');
      if (qtdReceitaControl) {
        qtdReceitaControl.setValue(event.target.value);
      }
    }
  }


  teste(): void {
    const values = this.albums.controls.map(control => control.value);
    console.log(values[0]);
    console.log(values[1]);
  }

}
