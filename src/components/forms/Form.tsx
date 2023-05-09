import { HtmlHTMLAttributes } from "react"
import { PrimaryButton, Title } from ".."

interface Props extends HtmlHTMLAttributes<HTMLDivElement>{
    title:string,
    onSubmit:()=>void
}

const Form = ({children, title, onSubmit}:Props) => {
    return (
        <>
            <Title children={title} />
            <div className="flex flex-wrap gap-7 px-5">
                {children}
                <PrimaryButton children="Agregar" onClick={onSubmit} bg={"btn-cyan"}/>
            </div>
        </>
    )
}

export default Form