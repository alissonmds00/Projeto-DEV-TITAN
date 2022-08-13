import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./src/pages/Home"
import { Login} from "./src/pages/Login"

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    )
}