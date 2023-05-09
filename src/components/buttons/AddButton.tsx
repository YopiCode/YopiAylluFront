import { HtmlHTMLAttributes } from "react"
import { ImgButton } from ".."
import { ImgMore } from "../../assets"

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> { }

const AddButton = ({children, ...props}:Props) => {
  return (
    <div className="mx-auto text-center mt-6">
        <ImgButton content={ImgMore} {...props} className="bg-yellow-400 p-2"/>
        <h2 className="text-3xl font-bold mt-4">
          De "Click" para agregar un {children}
        </h2>
      </div>
  )
}

export default AddButton