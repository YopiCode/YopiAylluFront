import axios, { AxiosResponse } from "axios"
import { BagApi } from "../apis"
import { ProductosModel } from "../models"

export const queryAllProductos =async (code:number) => {
    const response: AxiosResponse<Array<ProductosModel>> = await axios.get(`${BagApi}/${code}`)
    return response.data
}

export const deleteProductos =async (id:number) => {
    const response: AxiosResponse<number> = await axios.delete(`${BagApi}/${id}`)
    return response.data
}

export const addProductos =async (code:number, producto: ProductosModel) => {
    const response: AxiosResponse<ProductosModel> = await axios.post(`${BagApi}/${code}`, producto)
    return response.data
}

export const updateDisponible =async (id:number) => {
    await axios.put(`${BagApi}/${id}`)
}