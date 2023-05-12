import axios, { AxiosResponse } from "axios"
import { ZonesModel } from "../models"
import { ZoneApi } from "../apis"
import { ZonesResponse } from "../models/ResponseModels"

export const queryAllZones =async (code:number) => {
    const response: AxiosResponse<Array<ZonesResponse>> = await axios.get(`${ZoneApi}/${code}`)
    return response.data
}

export const deleteZonas =async (id:number) => {
    const response: AxiosResponse<number> = await axios.delete(`${ZoneApi}/${id}`)
    return response.data
}

export const addZones =async (code:number, zonas:ZonesModel) => {
    const response: AxiosResponse<ZonesResponse> = await axios.post(`${ZoneApi}/${code}`, zonas)
    return response.data
}