import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Card, Elevation, Button, H5, } from '@blueprintjs/core';

import { AppState } from 'src/store';
import { removeNote } from 'src/store/notes/actions';
import { notesDictSelector } from 'src/selectors/notesSelectors';

import Box from 'src/components/Box';


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
        <Card elevation={Elevation.ONE} interactive>
            <Box display="flex" flexDirection="row" justifyContent="spaceBetween" alignItems="stretch">
                <Box flat>
                    <H5>{text}</H5>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="flexStart">
                    <Button minimal icon="delete" onClick={handleDeleteButtonClick}/>
                </Box>
            </Box>
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
