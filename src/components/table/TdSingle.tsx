import { HtmlHTMLAttributes } from "react"

interface Props extends HtmlHTMLAttributes<HTMLDivElement> { }

const TdSingle = ({ children }: Props) => {
    return (
        <td className="border border-slate-700">{children}</td>
    )
}

export default TdSingle