import { Store, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'

import { AppState, createRootReducer } from './store'

export default function configureStore(history: History, initialState: AppState): Store<AppState> {
    const store = createStore(
        createRootReducer(history),
        initialState,
        applyMiddleware(routerMiddleware(history)),
    );

    return store;
}
