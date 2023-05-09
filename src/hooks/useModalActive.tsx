import { useState } from 'react'

const useModalActive = () => {
    const [activate, setActivate] = useState<boolean>(false)
    const handleActiveModal = () => {
        setActivate(!activate)
    }
    return {
        activate,
        handleActiveModal
    }
}

export default useModalActive