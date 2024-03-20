import { useState } from "react";
import { Id } from "../../config/adapter/id";
import { userApi } from "../../config/api/user-api";

const rules = {
    username: [
        { required: true, message: 'Por favor ingresa un nombre de usuario' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    email:[
        { required: true, message: 'Por favor ingresa un email' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' },
        { type: 'email', message: 'Email no valido' }
    ],
    name:[
        { required: true, message: 'Por favor ingresa un nombre' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    lastname:[
        { required: true, message: 'Por favor ingresa un apellido' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    status:[
        { required: true, message: 'Por favor selecciona un estado' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    age:[
        { required: true, message: 'Por favor ingresa una edad' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' },
    ]
}

export const useModalUser = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = async (values) => {

        setIsLoading(true);

        const body = {
            ...values,
            id: new Id().newId() 
            /**
             * se adapto uuid por si en un futuro se necesita generar los ids de otra manera
             * solo deberiamos cambiar en la clase como se genera el id
             */
        }

        setTimeout(async () => {
            try {
                const { data } = await userApi.post('/users', body);
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false);
            setIsOpen(false)
        }, 1000);
    }



    return {
        isOpen,
        isLoading,
        rules,
        openModal,
        closeModal,
        handleSubmit,
    }
}
