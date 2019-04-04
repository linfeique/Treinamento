import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home/App';
import * as serviceWorker from './serviceWorker';
import NotFound from './NotFound/NotFound';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
