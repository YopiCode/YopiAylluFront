import axios, { AxiosResponse } from "axios";
import { FamiliaModel, HomeModel, MyHomeModel } from "../models";
import { LoginApi, MyHomeApi, RegisterApi } from "../apis";
import { HomeApi } from "../apis";


export const registrarFamilia = async (familia: FamiliaModel) => {
    const response: AxiosResponse<FamiliaModel> = await axios.post(
        RegisterApi,
        familia
    )
    return response.data;
}

export const loginFamilia = async (familia: FamiliaModel) => {
    const response: AxiosResponse<FamiliaModel> = await axios.post(
        LoginApi,
        familia
    )
    return response.data;
}

export const homeFamilia = async (code:number) => {
    const response: AxiosResponse<HomeModel> = await axios.get(`${HomeApi}/${code}`)
    return response.data
}

export const InfoFamilia =async (code:number) => {
    const response: AxiosResponse<MyHomeModel> = await axios.get(`${MyHomeApi}/${code}`)
    return response.data
}