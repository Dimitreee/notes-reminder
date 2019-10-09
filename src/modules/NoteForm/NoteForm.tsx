import * as React from 'react';
import { FormRenderProps, withTypes } from 'react-final-form'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';
import uuid from 'uuid';

import Box from 'src/components/Box/Box';
import List from 'src/components/List';
import TextInput from 'src/components/TextInput';

import { Note } from 'src/types/core';
import { addNote } from 'src/store/notes/actions';
import { AppState } from 'src/store';

import { ADD } from 'src/constants/static/labels';

import { noteFormValidator } from './noteFormValidators';

export interface INoteFormValues {
    text: string,
}

interface IDispatchProps {
    addNote: (noteText: string) => void;
}

interface IOwnProps {
    initialValues?: INoteFormValues,
}

const { Form } = withTypes<INoteFormValues>();

class NoteForm extends React.PureComponent<IOwnProps & IDispatchProps> {
    private static defaulProps = {
        initialValues: { text: '' }
    };

    private handleSubmit = (values: INoteFormValues) => {
        this.props.addNote(values.text)
    };

    public render () {
        return (
            <Form
                validateOnBlur
                onSubmit={this.handleSubmit}
                initialValues={this.props.initialValues}
                validate={noteFormValidator}
                render={this.renderForm}
            />
        )
    }

    private renderForm = (props: FormRenderProps<INoteFormValues>): JSX.Element => {
        const { handleSubmit } = props;

        return (
            <Box flat collapse>
                <form onSubmit={handleSubmit}>
                    <List>
                        <TextInput name="text" leftIcon="new-object" fill/>
                        <Button type="submit" text={ADD}/>
                    </List>
                </form>
            </Box>
        )
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNote: (noteText: string) => {
        const note: Note = {
            id: uuid.v1(),
            text: noteText
        };

        dispatch(addNote(note))
    }
});

export default connect<{}, IDispatchProps, IOwnProps, AppState>(null, mapDispatchToProps)(NoteForm);
