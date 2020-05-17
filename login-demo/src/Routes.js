import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
// import Login from "./containers/Login";
import SignUpStrict from "./containers/SignUpStrict";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/signupstrict">
                <SignUpStrict />
            </Route>
        </Switch>
    );
}
