import React, { ChangeEvent } from 'react'
interface Props<T> extends React.HtmlHTMLAttributes<HTMLInputElement> { 
    object:T,
    setObject: React.Dispatch<React.SetStateAction<T>>
}
const CheckBoxForms = <T extends unknown>({ children, object, setObject, ...props }: Props<T>) => {
    const handlerChange= (e: ChangeEvent<HTMLInputElement>)=>{
        const {checked} = e.target
        setObject(checked as T)
    }
    return (
        <div className='flex justify-between w-full'>
            <p className='my-auto text-center text-lg font-medium'>{children}</p>
            <input {...props} type='checkbox' onChange={handlerChange} className='block my-3 mr-28 rounded-full shadow-xl w-5 h-5 bg-gray-100 border-gray-200 focus:ring-blue-500' />
        </div>
    )
}

export default CheckBoxForms