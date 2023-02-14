import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "@fire-ui/fire-ui/FireUI.min";
import "@fire-ui/fire-ui/FireUI.min.css";
import Home from "./Components/index.js";
import Register from "./Components/register.js";
import Login from "./Components/login.js";
import Logout from "./Components/logout.js";
import Navbar from "./Components/navbar.js";
import Create from "./Components/create.js";
import Question from "./Components/question.js";

const App = () => (
    <Router>
        <Route exact path = "*" component = {Navbar} />
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/register" component = {Register} />
            <Route path = "/login" component = {Login} />
            <Route path = "/logout" component = {Logout} />
            <Route path = "/create" component = {Create} />
            <Route path = "/question/:questionId" component = {Question} />
        </Switch>
    </Router>
)

export default App;