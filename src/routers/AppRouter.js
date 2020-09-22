import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import  Header from '../components/Header';
import  EditExpense from '../components/EditExpensePage';
import  Dashboard from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage'
import  AddExpense from '../components/AddExpensePage';
import  HelpPage from '../components/HelpPage';
import  NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (       //from <BrowserRouter> below we went to Router as we need history function to pass so that login route can be handled and expense dashboard can be rendered as per our need. BrowserRouter has its own history built-in
    <Router history={history}>          
    <div>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch> 
    </div>       
    </Router>
)

export default AppRouter;