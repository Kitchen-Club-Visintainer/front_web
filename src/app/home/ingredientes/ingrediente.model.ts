import {GrupoAlimentar} from "./GrupoAlimentar";

export class Ingrediente {

    // private id: number;
    private nome: string;
    private valorNutricional: string;
    private grupoAlimentar: GrupoAlimentar;


    constructor(
        // id: number,
        nome: string,
        valorNutricional: string,
        grupoAlimentar: GrupoAlimentar
    ) {
        // this.id = id;
        this.nome = nome;
        this.valorNutricional = valorNutricional;
        this.grupoAlimentar = grupoAlimentar;
    }


}
