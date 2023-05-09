export interface FamiliaModel {
    codigofamiliar: number,
    contrasena: number,
    direccion: string,
    nombrefamilia: string,
}

export interface HomeModel {
    codigofamiliar: number,
    nombrefamilia: string,
    integrantes: Array<IntegrantesModel>
}

export interface MyHomeModel {
    codigofamiliar: number,
    nombrefamilia: string,
    cantidad: number,
    lider: string
}

export interface ZonesModel {
    id: number,
    nombre: string,
    detalle: string,
    tipo: string
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


export interface CroquisModel {
    id: number,
    piso: number,
    mapa: string
}

export interface CroquisModelResponse {
    id: number,
    piso: number,
    mapa: Array<number>
}

export interface ProductosModel {
    id: number,
    nombre: string,
    fecha_caducidad: Date,
    caducable: boolean,
    disponible: boolean
}

export interface PlanesModel {
    id: number,
    nombre: string,
    pasos: Array<PasosPlanes>
}

export interface PasosPlanes {
    id: number,
    paso: number,
    detalle: string
}

export const EmptyPlanes: PlanesModel = {
    id: 0,
    nombre: "",
    pasos: []
}

export const EmptyPasos: PasosPlanes = {
    id: 0,
    paso: 0,
    detalle: "",
}

export const EmptyProductos: ProductosModel = {
    id: 0,
    nombre: "",
    fecha_caducidad: new Date(),
    caducable: false,
    disponible: false
}

export const EmptyCroquis: CroquisModel = {
    id: 0,
    piso: 0,
    mapa: ""
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
    nombrefamilia: ""
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

export const EmptyMyHome: MyHomeModel = {
    codigofamiliar: 0,
    nombrefamilia: "",
    cantidad: 0,
    lider: ""
}

export const EmptyZone: ZonesModel = {
    id: 0,
    nombre: "",
    detalle: "",
    tipo: ""
}

