import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import  EditExpense from '../components/EditExpensePage';
import  Dashboard from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage'
import  AddExpense from '../components/AddExpensePage';
import  NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
//import  HelpPage from '../components/HelpPage';

export const history = createHistory();

const AppRouter = () => (       //from <BrowserRouter> below we went to Router as we need history function to pass so that login route can be handled and expense dashboard can be rendered as per our need. BrowserRouter has its own history built-in
    <Router history={history}>          
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create" component={AddExpense} />
            <PrivateRoute path="/edit/:id" component={EditExpense} />
            <Route component={NotFoundPage}/>
        </Switch> 
    </div>       
    </Router>
)

export default AppRouter;