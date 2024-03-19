import React from 'react'
import { Breadcrum, Navbar } from './presentation/components'
import { UsersScreen } from './presentation/screens/users/UsersScreen'

export const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <Breadcrum labels={['Usuarios', 'Listado de usuarios']}/>
            <UsersScreen />
        </div>
    )
}
