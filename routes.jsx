import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./src/pages/Home"
import { Login } from "./src/pages/Login"
import { Register } from "./src/pages/Register";
import { Produto } from "./src/pages/Produto";
import { Cart } from "./src/pages/Cart";
import { NovoProduto } from "./src/pages/NovoProduto";

export const apiProdutos = 'https://www.google.com'
export const apiUsuarios = 'https://www.google.com'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={Produto} /> {/* os 2 pontos significa que ele espera uma variável ID  */}
            <Route path="/cart" component={Cart} />
            <Route path="/add" component={NovoProduto} />
        </BrowserRouter>
    )
} 