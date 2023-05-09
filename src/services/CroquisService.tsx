import axios, { AxiosResponse } from "axios";
import { CroquisModel, CroquisModelResponse } from "../models";
import { CroquisApi } from "../apis";

export const registrarPiso =async (code:number, croquis: CroquisModelResponse) => {
    const response: AxiosResponse<CroquisModel> = await axios.post(`${CroquisApi}/${code}`, croquis)
    return response.data
}

export const getAll =async (code:number) => {
    const response: AxiosResponse<Blob> = await axios.get(`${CroquisApi}/${code}`,{responseType: "blob"})
    return response.data
}