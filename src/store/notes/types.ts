import { INote } from 'src/types/core'

export enum NoteActionTypes {
    ADD_NOTE = '@@notes/ADD_NOTE',
    REMOVE_NOTE = '@@notes/REMOVE_NOTE',
    UPDATE_NOTE = '@@notes/UPDATE_NOTE'
}

export interface NotesDict {
    [id: string]: INote,
}

export type NotesIds = string[];

export interface NotesState {
    readonly data: NotesDict,
    readonly ids: NotesIds,
}
