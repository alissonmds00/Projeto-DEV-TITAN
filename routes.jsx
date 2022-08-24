import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./src/pages/Home"
import { Login } from "./src/pages/Login"
import { Register } from "./src/pages/Register";
import { ProdutoADM } from "./src/pages/ProdutoADM";
import { ProdutoUSER } from "./src/pages/ProdutoUSER";


export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={ProdutoADM} />
            <Route path="/user" component={ProdutoUSER} />
        </BrowserRouter>
    )
}