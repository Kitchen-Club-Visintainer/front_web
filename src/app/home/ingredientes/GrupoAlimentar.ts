export enum GrupoAlimentar {
    PROTEINAS = 1,
    CARBOIDRATOS = 2,
    GORDURAS = 3,
    VEGETAIS = 4,
    LEGUMINOSAS = 5,
    FRUTAS = 6,
    LATICINIOS = 7,
    DOCES = 8,
    OUTROS = 99
}

export const GrupoAlimentarDescricao: Record<GrupoAlimentar, string> = {
    [GrupoAlimentar.PROTEINAS]: "Carnes e ovos",
    [GrupoAlimentar.CARBOIDRATOS]: "Cereais, pães e tubérculos",
    [GrupoAlimentar.GORDURAS]: "Óleos e gorduras",
    [GrupoAlimentar.VEGETAIS]: "Hortaliças",
    [GrupoAlimentar.LEGUMINOSAS]: "Grãos como feijão e soja",
    [GrupoAlimentar.FRUTAS]: "Frutas",
    [GrupoAlimentar.LATICINIOS]: "Leite e derivados",
    [GrupoAlimentar.DOCES]: "Doces e fontes de açúcar",
    [GrupoAlimentar.OUTROS]: "Grupo alimentar desconhecido"
};

export const GrupoAlimentarDesc: Record<number, string> = {
    [GrupoAlimentar.PROTEINAS]: "Carnes e ovos",
    [GrupoAlimentar.CARBOIDRATOS]: "Cereais, pães e tubérculos",
    [GrupoAlimentar.GORDURAS]: "Óleos e gorduras",
    [GrupoAlimentar.VEGETAIS]: "Hortaliças",
    [GrupoAlimentar.LEGUMINOSAS]: "Grãos como feijão e soja",
    [GrupoAlimentar.FRUTAS]: "Frutas",
    [GrupoAlimentar.LATICINIOS]: "Leite e derivados",
    [GrupoAlimentar.DOCES]: "Doces e fontes de açúcar",
    [GrupoAlimentar.OUTROS]: "Grupo alimentar desconhecido"
};
