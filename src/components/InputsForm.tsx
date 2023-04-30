import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement> { }

const InputsForm = ({ itemType, content, ...props }: Props) => {
    return (
        <input
            {...props}
            type={itemType}
            className='w-full p-3 text-center text-lg italic rounded-xl shadow-lg mx-auto'
            name={content}
        />
    )
}

export default InputsForm