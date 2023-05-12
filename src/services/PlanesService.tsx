import axios, { AxiosResponse } from "axios"
import { PasosModel, PlanesModel } from "../models"
import { PasoApi, PlanApi } from "../apis"
import { PasosResponse, PlanesResponse } from "../models/ResponseModels"

export const queryAllPlanes =async (code:number) => {
    const response: AxiosResponse<Array<PlanesResponse>> = await axios.get(`${PlanApi}/${code}`)
    return response.data
}

export const deletePlanes =async (id:number) => {
    const response: AxiosResponse<number> = await axios.delete(`${PlanApi}/${id}`)
    return response.data
}

export const addPlanes =async (code:number, plan: PlanesModel) => {
    const response: AxiosResponse<PlanesResponse> = await axios.post(`${PlanApi}/${code}`, plan)
    return response.data
}

export const deletePasos =async (id:number) => {
    const response: AxiosResponse<number> = await axios.delete(`${PasoApi}/${id}`)
    return response.data
}

export const addPasos =async (idPlan:number, paso: PasosModel) => {
    const response: AxiosResponse<PasosResponse> = await axios.post(`${PasoApi}/${idPlan}`, paso)
    return response.data
}