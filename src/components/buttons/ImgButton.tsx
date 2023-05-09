import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> { }


const ImgButton = ({ className, content, ...props }: Props) => {
    return (
        <button {...props}
            className={`rounded-full shadow-xl ${className || ""}`}
        >
            <img src={content} alt="" className='w-full' />
        </button>
    )
}

export default ImgButton