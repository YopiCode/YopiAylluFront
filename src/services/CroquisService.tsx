import axios, { AxiosResponse } from "axios";
import { CroquisModel } from "../models";
import { CroquisApi } from "../apis";

export const registrarPiso =async (code:number, croquis: CroquisModel) => {
    const response: AxiosResponse<Blob> = await axios.post(`${CroquisApi}/${code}`, croquis ,{responseType: "blob"})
    return response.data
}

export const getAll =async (code:number) => {
    const response: AxiosResponse<Blob> = await axios.get(`${CroquisApi}/${code}`,{responseType: "blob"})
    return response.data
}