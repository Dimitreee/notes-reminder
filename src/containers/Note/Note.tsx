import * as React from 'react';
import {Dispatch} from 'redux';
import { connect } from 'react-redux';

import { Card, Elevation, Button } from '@blueprintjs/core';

import { AppState } from 'src/store';
import { removeNote } from 'src/store/notes/actions';
import { notesDictSelector } from 'src/selectors/notesSelectors';

import { Paragraph } from 'src/components/typography';

import s from './Note.module.css';

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

const Note: React.FC<INoteOwnProps & INoteStateProps & INoteDispatchProps> = ({ id, text, removeNote, }) => {
    const handleButtonClick = React.useCallback(() => removeNote(id), [id, removeNote]);

    return (
        <Card elevation={Elevation.ONE} interactive className={s.root}>
            <Button icon="cube-remove" onClick={handleButtonClick}/>
            <span>{id}</span>
            <Paragraph>{text}</Paragraph>
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
