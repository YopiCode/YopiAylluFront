import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useFamilyContext } from '../../context/FamilyProvider'

type Props = {
    href: string
}

const ProtectedLiderFamilia = ({href}:Props) => {
    const familia = useFamilyContext()
    if (!familia.lider) {
        return <Navigate to={href} replace />
    }
    return <Outlet />
}

export default ProtectedLiderFamilia