import { Navigate, Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useFamilyContext} from "../../context/FamilyProvider"

type Props = {
    href: string
}

const ProtectedFamilia = ({href}:Props) => {
    const familia = useFamilyContext()
    if(familia.codigofamiliar === 0 ){
        return <Navigate to={href} replace />
    }
    useEffect(()=>{
        console.log(familia)
    },[])
    

    return <Outlet />
}

export default ProtectedFamilia