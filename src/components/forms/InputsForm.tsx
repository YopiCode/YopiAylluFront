import React, { ChangeEvent } from 'react'

interface Props<T> extends React.HtmlHTMLAttributes<HTMLInputElement> {
    inputType: 'text' | 'number' | 'email' | 'password' | 'date' | 'file',
    object: T,
    disable?: boolean
    setObject: React.Dispatch<React.SetStateAction<T>>
}

const InputsForm = <T extends unknown>({ inputType, object, setObject, disable, ...props }: Props<T>) => {
    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (inputType === "number") {
            setObject(parseInt(value as string) as T)
        } else if (inputType === "file") {
            const file = e.target.files?.[0];
            setObject(file as T);
        } else if (inputType === "date") {
            const fecha = new Date(value);
            setObject(fecha as T);
        } else {
            setObject(value as T)
        }
    }
    return (
        <input
            disabled={disable}
            {...props}
            type={inputType}
            className='w-full p-3 text-center text-lg italic rounded-xl shadow-lg mx-auto'
            onChange={handlerChange}
        />
    )
}

export default InputsForm