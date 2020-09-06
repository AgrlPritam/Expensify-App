import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import  Header from '../components/Header';
import  EditExpense from '../components/EditExpensePage';
import  Dashboard from '../components/ExpenseDashboardPage';
import  AddExpense from '../components/AddExpensePage';
import  HelpPage from '../components/HelpPage';
import  NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch> 
    </div>       
    </BrowserRouter>
)

export default AppRouter;