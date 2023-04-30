export interface Familia {
    idfamilia:number,
    codigofamiliar:number,
    contrasena:number,
    recontrasena:number,
    direccion:string,
    nombrefamilia:string,
}

export const EmptyFamilia: Familia = {
    idfamilia: 0,
    codigofamiliar: 0,
    contrasena: 0,
    direccion: "",
    nombrefamilia: "",
    recontrasena: 0
}