//HOC --> Higher Order Component - A component(HOC) that renders another component
//Reuse code
//Render Hijacking
//Prop Manipulation
//Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {        //WrappedComponent here is Info and when it is called in JSX below we use spread operators to access all props from Info function
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private Info. Please Don't Share!!</p>}            
            <WrappedComponent {...props}/>      
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please Login to View Info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="Logged in Successfully" />,document.getElementById('app'))
//ReactDOM.render(<AdminInfo isAdmin={true} info="There is a cooler wind" />,document.getElementById('app'))