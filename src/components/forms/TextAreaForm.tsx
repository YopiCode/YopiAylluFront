import React, { ChangeEvent } from 'react'

interface Props<T> extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
    object: T,
    setObject: React.Dispatch<React.SetStateAction<T>>
}

const TextAreaForm = <T extends unknown>({ object, setObject, ...props }: Props<T>) => {
    const handlerChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setObject(value as T)
    }
    return (
        <textarea
            {...props}
            className='w-full p-3 text-center text-lg italic rounded-xl shadow-lg mx-auto'
            onChange={handlerChange}
        >

        </textarea>
    )
}

export default TextAreaForm