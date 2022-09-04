import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./src/pages/Home"
import { Login } from "./src/pages/Login"
import { Register } from "./src/pages/Register";
import { ProdutoADM } from "./src/pages/ProdutoADM";
import { ProdutoUSER } from "./src/pages/ProdutoUSER";
import { Cart } from "./src/pages/Cart";

export const apiProdutos = 'https://www.google.com'
export const apiUsuarios = 'https://www.google.com'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={ProdutoADM} />
            <Route path="/user/:id" component={ProdutoUSER} /> {/* Adicionei um ":id" no path do produto  */}
            <Route path="/cart" component={Cart} />
        </BrowserRouter>
    )
} 