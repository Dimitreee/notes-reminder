import { action } from 'typesafe-actions';

import { Note } from 'src/types/core';

import { NoteActionTypes } from './types';


export const addNote = (note: Note) => action(NoteActionTypes.ADD_NOTE, note);

export const removeNote = (id: string) => action(NoteActionTypes.REMOVE_NOTE, id);

export const updateNote = (note: Node) => action(NoteActionTypes.UPDATE_NOTE, note);
