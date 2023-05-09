import { HtmlHTMLAttributes } from "react"

export interface PropsModal extends HtmlHTMLAttributes<HTMLDivElement> { }
export interface PropsButton extends React.HTMLAttributes<HTMLButtonElement> {
    bg: 'btn-yellow' | 'btn-red' | 'btn-cyan' | ""
 }

export type ModalProps = {
    visible: boolean,
    title: string,
    onClose: () => void
} & PropsModal
