import axios, { AxiosResponse } from "axios";
import { Familia } from "../models";
import { RegisterFamily } from "../apis";
import { responseTypeCall } from "../models/Errors";


export const registrarFamilia =async (familia:Familia) => {
    const response: AxiosResponse<responseTypeCall> = await axios.post(
        RegisterFamily,
        familia
    )
    return response.data;
}