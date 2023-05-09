import { ImgExit } from '../../assets'

interface Props {
    onDelete: () => void,
}

const TdDelete = ({ onDelete}: Props) => {
    return (
        <td className="border border-slate-700 flex justify-between">
            <button onClick={onDelete}>
                <img src={ImgExit} className="w-6 mr-2" />
            </button>
        </td>
    )
}

export default TdDelete