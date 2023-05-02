import axios, { AxiosResponse } from "axios";
import { FamiliaModel, HomeModel } from "../models";
import { LoginFamily, RegisterFamily } from "../apis";
import { responseTypeCall } from "../models/Errors";
import { HomeFamily } from "../apis";


export const registrarFamilia = async (familia: FamiliaModel) => {
    const response: AxiosResponse<responseTypeCall> = await axios.post(
        RegisterFamily,
        familia
    )
    return response.data;
}

export const loginFamilia = async (familia: FamiliaModel) => {
    const response: AxiosResponse<responseTypeCall> = await axios.post(
        LoginFamily,
        familia
    )
    return response.data;
}

export const homeFamilia = async () => {
    const response: AxiosResponse<HomeModel> = await axios.get(`${HomeFamily}/1234`)
    return response.data
}