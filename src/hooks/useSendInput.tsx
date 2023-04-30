import { ChangeEvent, useState } from 'react'

const useSend = <T extends Object>(object: T) => {
    const [model, setModel] = useState(object)
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = target;
        setModel({
            ...model,
            [name]: value
        });
    }
    return {
        model,
        handleChange
    }
}

export default useSend