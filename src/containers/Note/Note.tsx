import * as React from 'react';
import {Dispatch} from 'redux';
import { connect } from 'react-redux';

import { Card, Elevation, Button } from '@blueprintjs/core';

import { AppState } from 'src/store';
import { removeNote } from 'src/store/notes/actions';
import { notesDictSelector } from 'src/selectors/notesSelectors';

import { Paragraph } from 'src/components/typography';


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
    const handleButtonClick = React.useCallback(() => removeNote(id), [id, removeNote]);

    return (
        <Card elevation={Elevation.ONE} interactive>
            <Paragraph>{text}</Paragraph>
            <Button icon="cube-remove" onClick={handleButtonClick}/>
        </Card>
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
