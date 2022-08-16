import './src/styles/global.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './src/pages/Home'
import Login from './src/pages/Login'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}
export default App