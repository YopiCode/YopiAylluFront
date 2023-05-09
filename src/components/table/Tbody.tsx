import { HtmlHTMLAttributes } from "react"

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}
const Tbody = ({children, ...props}:Props) => {
    return (
        <tbody>
        </tbody >
    )
}

export default Tbody