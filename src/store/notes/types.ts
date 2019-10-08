import { Note } from 'src/types/core'

export enum NoteActionTypes {
    ADD_NOTE = '@@notes/ADD_NOTE',
    REMOVE_NOTE = '@@notes/REMOVE_NOTE',
}

export interface NotesDict {
    [id: string]: Note,
}

export type NotesIds = string[];

export interface NotesState {
    readonly data: NotesDict,
    readonly ids: NotesIds,
}
