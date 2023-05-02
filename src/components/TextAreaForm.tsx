import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLTextAreaElement> { }

const TextAreaForm = ({content, ...props }: Props) => {
    return (
        <textarea
            {...props}
            className='w-full p-3 text-center text-lg italic rounded-xl shadow-lg mx-auto'
            name={content}
        >

        </textarea>
    )
}

export default TextAreaForm