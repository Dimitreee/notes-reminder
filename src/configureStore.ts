import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import { AppState, createRootReducer } from './store';

import { persistStore, persistReducer } from 'redux-persist'; //TODO: remove after CRUD nad SSR implement, fetch state from store
import { Persistor } from 'redux-persist/es/types'; //TODO: remove after CRUD nad SSR implement, fetch state from store
import storage from 'redux-persist/lib/storage'; //TODO: remove after CRUD nad SSR implement, fetch state from store

const persistConfig = {
    key: 'root',
    storage,
};

export default function configureStore(history: History, initialState: AppState): {
    store: Store<AppState>,
    persistor: Persistor,
}{
    const persistedReducer = persistReducer(persistConfig, createRootReducer(history)); //TODO: remove after CRUD nad SSR implement, fetch state from store
    const store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(routerMiddleware(history)),
    );

    const persistor = persistStore(store); //TODO: remove after CRUD nad SSR implement, fetch state from store

    return { store, persistor };
}
