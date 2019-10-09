import * as React from 'react';
import uuid from 'uuid';
import { pipe } from 'ramda';
import { FormRenderProps, withTypes } from 'react-final-form'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

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
    addNote: (note: Note) => void;
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
        const note: Note = {
            id: uuid.v1(),
            text: values.text,
        };

        this.props.addNote(note)
    };

    public render () {
        return (
            <Form
                onSubmit={this.handleSubmit}
                initialValues={this.props.initialValues}
                validate={noteFormValidator}
                render={this.renderForm}
                subscription={{ errors: true }}
            />
        )
    }

    private renderForm = (props: FormRenderProps<INoteFormValues>): JSX.Element => {
        const { handleSubmit, form } = props;

        return (
            <Box flat collapse>
                <form onSubmit={pipe(handleSubmit, form.reset)}>
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
    addNote: (note: Note) => {
        dispatch(addNote(note))
    }
});

export default connect<{}, IDispatchProps, IOwnProps, AppState>(null, mapDispatchToProps)(NoteForm);
