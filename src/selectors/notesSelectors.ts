import { createSelector, Selector } from 'reselect';

import { AppState } from 'src/store';
import { NotesDict, NotesIds, NotesState } from 'src/store/notes/types';

const getNotesState: Selector<AppState, NotesState > = (state)=> state.notes;

const getNotesIds: Selector<NotesState, NotesIds> = (notes) => notes.ids;
const getNotesDict: Selector<NotesState, NotesDict> = (notes: NotesState) => notes.data;

export const notesIdsSelector = createSelector(
    getNotesState,
    getNotesIds,
);

export const notesDictSelector = createSelector(
    getNotesState,
    getNotesDict,
);

