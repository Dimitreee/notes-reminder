import { action } from 'typesafe-actions';
import { INote } from 'src/types/core';
import { NoteActionTypes } from './types';


export const addNote = (note: INote) => action(NoteActionTypes.ADD_NOTE, note);

export const removeNote = (id: string) => action(NoteActionTypes.REMOVE_NOTE, id);

export const updateNote = (note: Node) => action(NoteActionTypes.UPDATE_NOTE, note);
