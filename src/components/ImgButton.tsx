import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement>{}


const ImgButton = ( {content, ...props}:Props) => {
    return (
        <button {...props}
        className='rounded-full bg-yellow-400 p-2 shadow-xl'
        >
            <img src={content} alt="" />
        </button>
    )
}

export default ImgButton