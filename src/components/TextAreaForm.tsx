import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLTextAreaElement> { }

const TextAreaForm = ({ ...props }: Props) => {
    return (
        <textarea
            {...props}
            className='w-full p-3 text-center text-lg italic rounded-xl shadow-lg mx-auto'
        >

        </textarea>
    )
}

export default TextAreaForm