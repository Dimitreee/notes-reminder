import * as React from 'react';

import { connect } from 'react-redux';
import { AppState } from 'src/store';

import { notesIdsSelector } from 'src/selectors/notesSelectors';

import List from 'src/components/List';
import Note from 'src/containers/Note';


interface INoteListProps {
    ids: Array<string>
}

const NoteList: React.FC<INoteListProps> = ({ ids }) => (
    <List>
        {ids.map((id: string) => (<Note id={id} key={id}/>))}
    </List>
);

// TODO: Add note list fetching here
const mapStateToProps = (state: AppState) => {
    const ids = notesIdsSelector(state);

    return { ids };
};

export default connect(mapStateToProps)(NoteList);
