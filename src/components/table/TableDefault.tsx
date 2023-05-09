import { HtmlHTMLAttributes } from "react"

type Props = {
    titulos: any[],
    datos: any[]
} & HtmlHTMLAttributes<HTMLTableElement>

const TableDefault = ({ datos, titulos }: Props) => {
    return (
        <table className='border border-slate-500 w-full rounded-3xl border-separate border-spacing-6'>
            <tbody className='text-xl font-medium'>
                {titulos.map((item, id) => {
                    return (
                        <tr key={id}>
                            <td>{item}</td>
                            <td>{datos[id]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableDefault