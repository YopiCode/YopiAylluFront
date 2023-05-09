import axios, { AxiosResponse } from "axios"
import { PasosPlanes, PlanesModel } from "../models"
import { PlanApi } from "../apis"

export const queryAllPlanes =async (code:number) => {
    const response: AxiosResponse<Array<PlanesModel>> = await axios.get(`${PlanApi}/${code}`)
    return response.data
}

export const deletePlanes =async (id:number) => {
    const response: AxiosResponse<number> = await axios.delete(`${PlanApi}/${id}`)
    return response.data
}

export const addPlanes =async (code:number, plan: PlanesModel) => {
    const response: AxiosResponse<PlanesModel> = await axios.post(`${PlanApi}/${code}`, plan)
    return response.data
}

export const deletePasos =async (id:number) => {
    const response: AxiosResponse<number> = await axios.delete(`${PlanApi}/paso/${id}`)
    return response.data
}

export const addPasos =async (idPlan:number, paso: PasosPlanes) => {
    const response: AxiosResponse<PasosPlanes> = await axios.post(`${PlanApi}/paso/${idPlan}`, paso)
    return response.data
}