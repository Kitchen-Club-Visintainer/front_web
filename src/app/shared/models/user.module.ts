
export class User {
  // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
  constructor(
    id: number | undefined,
    nome: string | undefined,
    email: string | undefined,
    senha: string | undefined,
    perfil: string | undefined
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.perfil = perfil;
  }


  public id: number | undefined;
  public nome: string | undefined;
  public email: string | undefined;
  public senha: string | undefined;
  public perfil: string | undefined;
}
