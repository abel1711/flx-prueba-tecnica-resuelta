import React from 'react'
import { Provider } from 'react-redux'
import { Breadcrum, Navbar } from './presentation/components'
import { UsersScreen } from './presentation/screens/users/UsersScreen'
import { store } from './presentation/redux/store/appStore'


export const App = () => {
    return (
        <Provider store={store}>

            <div className='container'>
                <Navbar />
                <Breadcrum labels={['Usuarios', 'Listado de usuarios']} />
                <UsersScreen />
            </div>
        </Provider>
    )
}
