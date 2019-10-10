import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { H5, } from '@blueprintjs/core';

import { AppState } from 'src/store';
import { removeNote } from 'src/store/notes/actions';
import { notesDictSelector } from 'src/selectors/notesSelectors';

import TemplateCard from 'src/components/TemplateCard';
import { Paragraph } from 'src/components/typography'
import { INote } from 'src/types/core';


interface INoteOwnProps {
    id: string,
}

interface INoteStateProps {
    note: INote,
}

interface INoteDispatchProps {
    removeNote: (id: string) => void,
}

const Note: React.FC<INoteOwnProps & INoteStateProps & INoteDispatchProps> = (props) => {
    const { id, note, removeNote, } = props;
    const handleDeleteButtonClick = React.useCallback(() => removeNote(id), [id, removeNote]);

    return (
        <TemplateCard controls={{ minimal: true, icon: 'delete', onClick: handleDeleteButtonClick }}>
            <>
                <H5>{note.title}</H5>
                { note.description && <Paragraph>{note.description}</Paragraph> }
            </>
        </TemplateCard>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    removeNote: (id: string) => {
        dispatch(removeNote(id));
    }
});

const mapStateToProps = (state: AppState, ownProps: INoteOwnProps) => {
    const notesDict = notesDictSelector(state);

    return { note: notesDict[ownProps.id] }
};

export default connect<INoteStateProps, INoteDispatchProps, INoteOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Note)
