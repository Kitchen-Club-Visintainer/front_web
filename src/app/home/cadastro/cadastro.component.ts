import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cadastro} from "../../shared/models/cadastro.model";
import {first} from "rxjs";
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  loading: boolean = false;
  cadastroForm!: FormGroup;
  cadastro: Cadastro = new Cadastro;
  estados!:{id: number, nome: string}[];

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: LoginService) {
  }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confSenha: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: ['', Validators.required],
      numero: ['', Validators.required]
    });
    this.estados = this.buscarEstados();
  }
  buscarEstados(): { id: number, nome: string }[] {
    const estados: { id: number, nome: string }[] = [];

    this.authenticationService.buscarEstados()
      .subscribe(value =>
          estados.push(
            ...value.map((nome, index) => ({ id: index + 1, nome: nome as string }))
          ), error => {
          this.verificarErroSessao(error)
          console.log(error);
        }
      );

    return estados;
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.cadastroForm.controls;
  }

  cadastrarNovoUsuario(): void {
    // if (this.cadastroForm.invalid) {
    //   return;
    // }

    this.cadastro.nomeCompleto = this.f['nomeCompleto'].value
    this.cadastro.username = this.f['username'].value
    this.cadastro.email = this.f['email'].value
    this.cadastro.senha = this.f['senha'].value
    this.cadastro.confSenha = this.f['confSenha'].value
    this.cadastro.cep = this.f['cep'].value
    this.cadastro.logradouro = this.f['logradouro'].value
    this.cadastro.complemento = this.f['complemento'].value
    this.cadastro.numero = this.f['numero'].value
    //TODO: Colocar UF

    this.loading = true;
    this.authenticationService.cadastrarNovoUsuario(this.cadastro)
      .pipe(first())
      .subscribe(
        data => {
          console.log('Sucesso', data)
        },
        error => {
          this.verificarErroSessao(error)
          console.log('Erro', error)
        }
      );
    this.cadastroForm.reset();

    this.loading = false;
  }

  private verificarErroSessao(error: any): void {
    if (error.status == 403) {
      console.log(error.message);
      this.authenticationService.logout();
    }
  }

}
