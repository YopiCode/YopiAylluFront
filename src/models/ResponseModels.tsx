export interface FamiliaResponse {
    codigofamiliar: number,
    lider: string,
    nombrefamilia: string,
    cantidad: number
}

export interface HomeResponse {
    codigofamiliar: number,
    nombrefamilia: string,
    integrantes: Array<IntegranteResponse>
}

export interface ProductosResponse {
    id: number,
    nombre: string,
    fecha_caducidad: Date,
    caducable: boolean,
    disponible: boolean
}

export interface CroquisResponse {
    piso: number,
    mapa: string
}

export interface IntegranteResponse{
    id: number,
    nombres: string,
    apellidos: string,
    dni: number,
    telefono: number,
    discapacitado: boolean,
    lider: boolean,
    mascota: boolean,
    roles: string
}

export interface PlanesResponse {
    id: number,
    nombre: string,
    pasos: Array<PasosResponse>
}

export interface PasosResponse {
    id: number,
    idPlan: number,
    paso: number,
    detalle: string
}

export interface ZonesResponse {
    id: number,
    nombre: string,
    detalle: string,
    tipo: string
}

export interface ImagenesResponse {
    filename: string,
    url: string
}


export const EmptyImagenes: ImagenesResponse = {
    filename: "",
    url: ""
}

export const EmptyFamiliaResponse: FamiliaResponse = {
    codigofamiliar: 0,
    lider: "",
    nombrefamilia: "",
    cantidad: 0
}

export const EmptyHome: HomeResponse = {
    codigofamiliar: 0,
    nombrefamilia: "",
    integrantes: []
}

export const EmptyPlanesResponse: PlanesResponse = {
    id: 0,
    nombre: "",
    pasos: []
}

export const EmptyPasosResponse: PasosResponse = {
    idPlan: 0,
    paso: 0,
    detalle: "",
    id: 0
}

export const EmptyZonesResponse: ZonesResponse = {
    id: 0,
    nombre: "",
    detalle: "",
    tipo: ""
}