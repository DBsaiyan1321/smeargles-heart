import React from "react"; 
import { connect } from "react-redux"; 
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, exact, loggedIn }) => {
    return <Route 
            path={path}
            exact={exact}
            render={props => {
                return !loggedIn ? <Component {...props} /> : <Redirect to="/" /> // upacking the props into the Component
            }}
        />
};

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));


