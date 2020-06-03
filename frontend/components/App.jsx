import React from "react"; 
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./user_auth/login_form_container";
import SignupFormContainer from "./user_auth/signup_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import CreateImaginationContainer from "./imaginations/create_imagination_container";
import EditImaginationContainer from "./imaginations/edit_imagination_container";
import ShowImaginationContainer from "./imaginations/show_imagination_container";
import ProfileContainer from "./profile/profile_container";

const App = () => {
    return (
        <Switch>
            <Route exact path="/imaginations/:imaginationId/edit" component={EditImaginationContainer} />
            <Route exact path="/imaginations/:imaginationId" component={ShowImaginationContainer} />
            <Route exact path="/user/:username" component={ProfileContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/new" component={CreateImaginationContainer} />
            <ProtectedRoute path="/edit" component={EditImaginationContainer} />
            <Route exact path="/" component={GreetingContainer} />
            <Route path="*" component={GreetingContainer}/>
        </Switch>
    )
}; 

export default App;