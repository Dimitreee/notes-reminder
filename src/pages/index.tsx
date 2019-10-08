import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
};

export default Routes;
