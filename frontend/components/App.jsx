import React from "react"; 
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import CreateImaginationContainer from "./imaginations/create_imagination_container";
import EditImaginationContainer from "./imaginations/edit_imagination_container";

const App = () => {
    return (
        <div>
           <Switch>
                <Route exact path="/" component={GreetingContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/new" component={CreateImaginationContainer} />
                <ProtectedRoute path="/edit" component={EditImaginationContainer} />
                <Route path="*" component={GreetingContainer}/>
            </Switch>
        </div>
    )
}; 

export default App;