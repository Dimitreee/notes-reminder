import { Reducer } from 'redux'
import cloneDeep from 'lodash/cloneDeep';
import { NotesState, NoteActionTypes } from './types'

export const initialState: NotesState = {
    data: {},
    ids: []
};

const reducer: Reducer<NotesState> = (state = initialState, action) => {
    switch (action.type) {
        case NoteActionTypes.ADD_NOTE: {
            const note = action.payload;

            const nextIds = state.ids.concat(note.id);
            const nextData = cloneDeep(state.data);

            nextData[note.id] = note;

            return {
                ...state,
                ids: nextIds,
                data: nextData,
            };
        }

        case NoteActionTypes.REMOVE_NOTE: {
            const injectedId = action.payload;

            const nextIds = state.ids.filter((id) => id !== injectedId);
            const nextData = cloneDeep(state.data);

            delete nextData[injectedId];

            return { ...state, ids: nextIds, data: nextData };
        }

        default: {
            return state
        }
    }
}

export { reducer as notesReducer }
