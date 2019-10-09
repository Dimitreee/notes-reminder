import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { Persistor } from 'redux-persist/es/types';
import { PersistGate } from 'redux-persist/integration/react';

import { AppState } from 'src/store';

import Routes from './pages';

interface MainProps {
    store: Store<AppState>,
    history: History,
    persistor: Persistor, //TODO: remove after CRUD nad SSR implement, fetch state from store
}

const App: React.FC<MainProps> = ({ store, history, persistor, }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes/>
                </PersistGate>
            </ConnectedRouter>
        </Provider>
    )
};

export default App;
