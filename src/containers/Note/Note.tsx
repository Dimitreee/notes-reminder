import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { H5, } from '@blueprintjs/core';

import { AppState } from 'src/store';
import { removeNote } from 'src/store/notes/actions';
import { notesDictSelector } from 'src/selectors/notesSelectors';

import TemplateCard from 'src/components/TemplateCard';


interface INoteOwnProps {
    id: string,
}

interface INoteStateProps {
    id: string,
    text: string,
}

interface INoteDispatchProps {
    removeNote: (id: string) => void,
}

const Note: React.FC<INoteOwnProps & INoteStateProps & INoteDispatchProps> = (props) => {
    const { id, text, removeNote, } = props;
    const handleDeleteButtonClick = React.useCallback(() => removeNote(id), [id, removeNote]);

    return (
        <TemplateCard controls={{ minimal: true, icon: 'delete', onClick: handleDeleteButtonClick }}>
            <H5>{text}</H5>
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

    return notesDict[ownProps.id]
};

export default connect<INoteStateProps, INoteDispatchProps, INoteOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Note)
