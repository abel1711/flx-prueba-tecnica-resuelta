import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@redux';
import { RouterApp } from '@router'

export const App = () => {

    return (
        <Provider store={store}>
           <RouterApp />
        </Provider>
    )
}
