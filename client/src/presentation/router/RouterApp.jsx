import { Breadcrum, Navbar } from "../components"
import { UsersScreen } from "../screens";

/**
 * En este componente crearíamos la navegacion de la aplicación
 */


/**
 *  estos items deberiamos generarlos en base a la navegación
 */

const itemsBreadcrum = [
    {
        title: 'Usuarios'
    },
    {
        title: 'Listado de usuarios'
    }
]

export const RouterApp = () => {
    return (
        <div className='container'>
            <Navbar />
            <Breadcrum items={itemsBreadcrum} />
            <UsersScreen />
        </div>
    )
}
