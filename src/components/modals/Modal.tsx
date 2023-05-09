import { ImgExit } from '../../assets'
import { ImgButton } from '..'
import { ModalProps } from '../../models/Props'


const Modal = (
    {
        children,
        visible,
        className,
        onClose,
        title,
        ...props
    }: ModalProps
) => {
    if (!visible) return <></>
    return (
        <div className='fixed left-0 top-0 w-screen h-screen z-40 bg-black bg-opacity-30 backdrop-blur'>
            <div
                className={`mx-auto my-auto p-4 w-screen max-w-sm max-h-max absolute inset-0 bg-sky-100 rounded-3xl border shadow-3xl ${className}`}
                {...props}
            >
                <div className='flex mb-2'>
                    {title && <h4 className='text-lg font-bold'>{title}</h4>}
                    <ImgButton className='ml-auto bg-transparent' onClick={onClose} content={ImgExit} />
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal