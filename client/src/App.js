import React from 'react'
import ExpenseList from './components/ExpenseList.js'
import AddExpensePage from './components/AddExpensePage.js'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <ExpenseList />
                <AddExpensePage />
            </Switch>
        </div>  
    )
}

export default App