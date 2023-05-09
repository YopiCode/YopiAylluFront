import { HtmlHTMLAttributes } from 'react'
import { ImgExit } from '../../assets'

type Props = {
    show: boolean,
    bg: 'table-cyan' | 'table-red' | 'table-yellow' | 'table-orange' | 'table-slate' | 'table-black'
} & HtmlHTMLAttributes<HTMLTableElement>

const Table = ({
    show,
    children,
    className,
    bg,
    ...props
}: Props) => {
    return (
        <div>
            {show ? (
                <table {...props}
                    className={`w-full text-center rounded-3xl border-separate border-spacing-2 border ${className ?? ""} ${bg ?? ""}`}>

                    {children}
                </table>
            ) : ("")}
        </div>
    )
}

export default Table