import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { useFamilyContext} from "../../context/FamilyProvider"
import useLocalStoreage from "../../hooks/useLocalStoreage"

type Props = {
    href: string
}

const ProtectedFamilia = ({href}:Props) => {
    const familia = useFamilyContext()
    if(familia.codigofamiliar === 0 ){
        return <Navigate to={href} replace />
    }
    return <Outlet />
}

export default ProtectedFamilia