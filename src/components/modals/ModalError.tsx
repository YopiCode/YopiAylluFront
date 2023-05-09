import { Modal } from ".."
import { ModalProps } from "../../models/Props"


const ModalError = ({
    children,
    visible,
    onClose,
    ...props
}:ModalProps) => {
  return (
    <div>
        <Modal visible={visible} title={"Error"} onClose={onClose} children={`Error, no se pudo ${children}`} className="text-red-500" />
    </div>
  )
}

export default ModalError