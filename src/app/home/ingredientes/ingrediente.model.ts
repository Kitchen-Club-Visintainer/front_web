import {GrupoAlimentar} from "./GrupoAlimentar";

export class Ingrediente {

  // private id: number;
  private _nome: string;
  private _valorNutricional: string;
  private _grupoAlimentar: GrupoAlimentar;


  constructor(
    // id: number,
    nome: string,
    valorNutricional: string,
    grupoAlimentar: GrupoAlimentar
  ) {
    // this.id = id;
    this._nome = nome;
    this._valorNutricional = valorNutricional;
    this._grupoAlimentar = grupoAlimentar;
  }


  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get valorNutricional(): string {
    return this._valorNutricional;
  }

  set valorNutricional(value: string) {
    this._valorNutricional = value;
  }

  get grupoAlimentar(): GrupoAlimentar {
    return this._grupoAlimentar;
  }

  set grupoAlimentar(value: GrupoAlimentar) {
    this._grupoAlimentar = value;
  }
}
