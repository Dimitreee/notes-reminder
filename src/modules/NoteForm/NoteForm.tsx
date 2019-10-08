import * as React from 'react';
import { FormRenderProps, withTypes } from 'react-final-form'
import { Button } from '@blueprintjs/core';
import TextInput from 'src/components/TextInput';

import List from 'src/components/List';
import { noteFormValidator } from 'src/modules/NoteForm/noteFormValidators';

import { ADD } from 'src/constants/static/labels';
import {Dispatch} from "redux";
import {Note} from "../../types/core";
import uuid from "uuid";
import {addNote} from "../../store/notes/actions";
import {connect} from "react-redux";
import {AppState} from "../../store";


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
            <form onSubmit={handleSubmit}>
                <List>
                    <TextInput name="text" leftIcon="new-object" fill/>
                    <Button type="submit" text={ADD}/>
                </List>
            </form>
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
