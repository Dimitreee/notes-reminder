import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { AppState } from 'src/store'

import Routes from './pages';

interface MainProps {
    store: Store<AppState>
    history: History
}

const App: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
    )
};

export default App;
