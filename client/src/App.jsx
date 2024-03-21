import React from 'react'
import { Provider } from 'react-redux'
import { store } from './presentation/redux'
import { RouterApp } from './presentation/router'

export const App = () => {

    return (
        <Provider store={store}>
           <RouterApp />
        </Provider>
    )
}
