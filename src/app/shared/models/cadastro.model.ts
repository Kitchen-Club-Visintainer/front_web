export class Cadastro {

  public id: number | undefined;
  public nomeCompleto: String| undefined;
  public username: String | undefined;
  public email: String | undefined;
  public senha: String | undefined;
  public confSenha: String | undefined;
  public cep: String | undefined;
  public logradouro: String | undefined;
  public complemento: String | undefined;
  public numero: number | undefined;
  public uf: String | undefined;

  constructor(id?: number, nomeCompleto?: String, username?: String, email?: String, senha?: String, confSenha?: String,
              cep?: String, logradouro?: String, complemento?: String, numero?: number, uf?: String) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.username = username;
    this.email = email;
    this.senha = senha;
    this.confSenha = confSenha;
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.numero = numero;
    this.uf = uf;
  }
}
