import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import ExpenseProvider from './context/ExpenseProvider.js'
import './style.css'

ReactDOM.render(
    <BrowserRouter>
        <ExpenseProvider>
            <App />
        </ExpenseProvider>
    </BrowserRouter>, 
document.getElementById('root'))