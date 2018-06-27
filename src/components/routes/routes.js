import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../app/App';
import Dashboard from '../dashboard/dashboard';

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
); 

export default Router;
