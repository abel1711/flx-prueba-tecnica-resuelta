import { useState } from "react";
import { useDispatch } from "react-redux";
import { Id } from "../../config/adapter/id";
import { userApi } from "../../config/api/user-api";
import { setUserEdited } from "../redux/features/users/usersSlice";
import { getUsersThunks } from "../redux/features/users/usersThunks";

/**
 * Estas constantes podrian estar en un archivo separado
 */

const RULES = {
    username: [
        { required: true, message: 'Por favor ingresa un nombre de usuario' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    email: [
        { required: true, message: 'Por favor ingresa un email' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' },
        { type: 'email', message: 'Email no valido' }
    ],
    name: [
        { required: true, message: 'Por favor ingresa un nombre' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    lastname: [
        { required: true, message: 'Por favor ingresa un apellido' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    status: [
        { required: true, message: 'Por favor selecciona un estado' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' }
    ],
    age: [
        { required: true, message: 'Por favor ingresa una edad' },
        { whitespace: true, message: 'No pueden haber espacios vacíos' },
    ]
};

const INITIALFORM = {
    username: '',
    email: '',
    name: '',
    lastname: '',
    status: '',
    age: '',
}

export const useModalUser = () => {

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = async (values, user) => {

        setIsLoading(true);

        setTimeout(async () => {

            if (user?.id) {
                try {
                    const { data } = await userApi.put(`/users/${user.id}`, values);
                    dispatch(setUserEdited(data))
                    /**
                     * Se aprovecho que json-server devuelve el usuario editado para agregarlo
                     * al state sin tener que hacer otra petición
                     */
                } catch (error) {
                    /**
                     * Aca falta un feedback para que el usuario sea notificado de que algo salío mal
                     */
                    console.log(error);
                }
            } else {

                const body = {
                    ...values,
                    id: new Id().newId()
                    /**
                     * se adapto uuid por si en un futuro se necesita generar los ids de otra manera
                     * solo deberiamos cambiar en la clase como se genera el id
                     */
                }
                try {
                    await userApi.post('/users', body);
                    dispatch(getUsersThunks())
                    /**
                     * En este punto json-server me devuelve el usuario que cree, pero como esta paginado
                     * no serviria realmente agregarlo a los users de mi state, por eso se realiza una nueva petición
                     * para que rellene la tabla con los usuarios.
                     */
                } catch (error) {
                    console.log(error)
                   /**
                     * Aca falta un feedback para que el usuario sea notificado de que algo salío mal
                     */
                }
            }
            setIsLoading(false);
            setIsOpen(false)
        }, 1000);
    }



    return {
        isOpen,
        isLoading,
        RULES,
        INITIALFORM,
        openModal,
        closeModal,
        handleSubmit,
    }
}
