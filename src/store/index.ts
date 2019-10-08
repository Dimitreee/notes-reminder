import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { NotesState } from './notes/types';
import { notesReducer } from './notes/reducers';

export interface AppState {
    router: RouterState,
    notes: NotesState,
}

export const createRootReducer = (history: History) => combineReducers({
    // layout: layoutReducer,
    // heroes: heroesReducer,
    notes: notesReducer,
    router: connectRouter(history)
});
