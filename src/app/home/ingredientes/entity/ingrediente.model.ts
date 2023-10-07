import {GrupoAlimentar} from "../GrupoAlimentar";

export class Ingrediente {

  nome: string;
  valorNutricional: string;
  grupoAlimentar: GrupoAlimentar;


  constructor(
    nome: string,
    valorNutricional: string,
    grupoAlimentar: GrupoAlimentar
  ) {
    this.nome = nome;
    this.valorNutricional = valorNutricional;
    this.grupoAlimentar = grupoAlimentar;
  }
}
