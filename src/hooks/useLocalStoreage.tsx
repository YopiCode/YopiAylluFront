import React, { useCallback, useEffect, useState } from 'react'

interface Local<Type> {
    key: string,
    initialValue?: Type
}

const useLocalStoreage = <Type extends Object>({
    key,
    initialValue
}: Local<Type>) => {

    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })


    const setStoredValue = useCallback(
        (val: React.Dispatch<React.SetStateAction<Type>>) => {
            try {
                const valueToStore = val instanceof Function ? val(value) : val
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            } catch (error) {
                console.log(error)
            }
        },
        [value, key]
    )
    useEffect(() => {
        setStoredValue(value)
    }, [value, setStoredValue])


    return [value, setValue]
}

export default useLocalStoreage


