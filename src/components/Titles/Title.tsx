import { HtmlHTMLAttributes } from "react"

interface Props extends HtmlHTMLAttributes<HTMLTitleElement> { }

const Title = ({children, className, ...props}:Props) => {
    return (
        <h2 className={`text-4xl text-center font-bold my-5 ${className ?? ""}`}>{children}</h2>
    )
}

export default Title