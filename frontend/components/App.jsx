import React from "react"; 
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => {
    return (
        <div>
           <Switch>
                <Route exact path="/" component={GreetingContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <Route path="*" component={GreetingContainer}/>
            </Switch>
        </div>
    )
}; 

export default App;