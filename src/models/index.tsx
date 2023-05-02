export interface FamiliaModel {
    codigofamiliar: number,
    contrasena: number,
    recontrasena: number,
    direccion: string,
    nombrefamilia: string,
}

export interface HomeModel {
    codigofamiliar: number,
    nombrefamilia: string,
    integrantes: Array<IntegrantesModel>
}

export interface IntegrantesModel {
    id: number,
    nombres: string,
    apellidos: string,
    dni: number,
    telefono: number,
    lider: boolean,
    discapacitado: boolean,
    mascota: boolean,
    roles: string
}

export const EmptyHome: HomeModel = {
    codigofamiliar: 0,
    nombrefamilia: "",
    integrantes: []
}

export const EmptyFamilia: FamiliaModel = {
    codigofamiliar: 0,
    contrasena: 0,
    direccion: "",
    nombrefamilia: "",
    recontrasena: 0
}

export const EmptyIntegrantes: IntegrantesModel = {
    id: 0,
    nombres: "",
    apellidos: "",
    dni: 0,
    telefono: 0,
    lider: false,
    discapacitado: false,
    mascota: false,
    roles: ""
}