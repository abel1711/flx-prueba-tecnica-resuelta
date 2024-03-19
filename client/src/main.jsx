import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UsersScreen } from './presentation/screens/users/UsersScreen'
import { Breadcrum, Navbar } from './presentation/components'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
