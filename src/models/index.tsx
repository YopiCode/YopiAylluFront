export interface FamiliaModel {
    codigofamiliar: number,
    contrasena: number,
    direccion: string,
    nombrefamilia: string,
}


export interface ZonesModel {
    nombre: string,
    detalle: string,
    tipo: string
}

export interface IntegrantesModel {
    nombres: string,
    apellidos: string,
    dni: number,
    telefono: number,
    discapacitado: boolean,
    mascota: boolean,
    roles: string
}


export interface CroquisModel {
    piso: number,
    mapa: Array<number>
}


export interface ProductosModel {
    nombre: string,
    fecha_caducidad: Date,
    caducable: boolean
}

export interface PlanesModel {
    nombre: string
}

export interface PasosModel {
    detalle: string
}

export const EmptyPlanes: PlanesModel = {
    nombre: ""
}

export const EmptyPasos: PasosModel = {
    detalle: ""
}

export const EmptyProductos: ProductosModel = {
    nombre: "",
    fecha_caducidad: new Date(),
    caducable: false
}

export const EmptyCroquis: CroquisModel = {
    piso: 0,
    mapa: []
}


export const EmptyFamilia: FamiliaModel = {
    codigofamiliar: 0,
    contrasena: 0,
    direccion: "",
    nombrefamilia: ""
}

export const EmptyIntegrantes: IntegrantesModel = {
    nombres: "",
    apellidos: "",
    dni: 0,
    telefono: 0,
    discapacitado: false,
    mascota: false,
    roles: ""
}

export const EmptyZone: ZonesModel = {
    nombre: "",
    detalle: "",
    tipo: ""
}

