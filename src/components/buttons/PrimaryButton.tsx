import { PropsButton } from '../../models/Props'

const PrimaryButton = (
    {
        children,
        bg,
        ...props
    }: PropsButton) => {
    return (
        <button
            className={`block mx-auto  text-bold text-lg text-white py-2 px-4 rounded-lg  ${bg ?? ""}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default PrimaryButton