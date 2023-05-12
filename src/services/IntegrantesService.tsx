import axios, { AxiosResponse } from "axios"
import { IntegrantesModel } from "../models"
import { IntegrantesApi } from "../apis"
import { IntegranteResponse } from "../models/ResponseModels"



export const getIntegrantesByCodigo = async (code:number) => {
    const response: AxiosResponse<Array<IntegranteResponse>> = await axios.get(`${IntegrantesApi}/${code}`)
    return response.data
}

export const registerIntegrantes = async (code:number, integrante: IntegrantesModel) => {
    const response: AxiosResponse<IntegranteResponse> = await axios.post(`${IntegrantesApi}/ ${code}`, integrante)
    return response.data
}

export const deleteIntegrante = async (id: number) => {
    const response: AxiosResponse<number> = await axios.delete(`${IntegrantesApi}/${id}`)
    return response.data
}