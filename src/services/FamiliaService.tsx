import axios, { AxiosResponse } from "axios";
import { FamiliaModel } from "../models";
import { LoginApi, MyHomeApi, RegisterApi } from "../apis";
import { HomeApi } from "../apis";
import { FamiliaResponse, HomeResponse } from "../models/ResponseModels";


export const registrarFamilia = async (familia: FamiliaModel) => {
    const response: AxiosResponse<FamiliaResponse> = await axios.post(
        RegisterApi,
        familia
    )
    return response.data;
}

export const loginFamilia = async (familia: FamiliaModel) => {
    const response: AxiosResponse<FamiliaResponse> = await axios.post(
        LoginApi,
        familia
    )
    return response.data;
}

export const homeFamilia = async (code: number) => {
    const response: AxiosResponse<HomeResponse> = await axios.get(`${HomeApi}/${code}`)
    return response.data
}

export const InfoFamilia = async (code: number) => {
    const response: AxiosResponse<FamiliaResponse> = await axios.get(`${MyHomeApi}/${code}`)
    return response.data
}