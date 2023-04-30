import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    content?:string
 }

const tipo = [
    'block bg-yellow-400 text-bold text-lg text-white py-2 px-4 rounded-lg shadow-md shadow-yellow-300',
    'block mx-auto bg-cyan-900 text-bold text-lg text-white py-2 px-4 rounded-lg shadow-md shadow-cyan-900',
    'block mx-auto text-bold text-lg text-white py-2 px-4'
]



const PrimaryButton = (
    {
        children,
        content,
        ...props
    }: Props) => {
    return (
        <button
            className= {tipo[parseInt(content??"0")]}
            {...props}
        >
            {children}
        </button>
    )
}

export default PrimaryButton