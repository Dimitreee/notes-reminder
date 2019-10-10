import * as React from 'react';
import uuid from 'uuid';
import { pipe } from 'lodash/fp';
import { FormRenderProps, withTypes } from 'react-final-form'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

import Box from 'src/components/Box/Box';
import TextInput from 'src/components/TextInput';

import { INote } from 'src/types/core';
import { addNote } from 'src/store/notes/actions';
import { AppState } from 'src/store';

import { ADD } from 'src/constants/static/labels';
import { NOTE_FORM_INITIAL_VALUES } from './constants';

import { noteFormValidator } from './noteFormValidators';

export interface INoteFormValues {
    title: string,
    description: string,
}

interface IDispatchProps {
    addNote: (note: INote) => void;
}

interface IOwnProps {
    initialValues?: INoteFormValues,
}

const { Form } = withTypes<INoteFormValues>();

class NoteForm extends React.PureComponent<IOwnProps & IDispatchProps> {
    private static defaulProps = {
        initialValues: NOTE_FORM_INITIAL_VALUES,
    };

    private handleSubmit = (values: INoteFormValues) => {
        const note: INote = {
            id: uuid.v1(),
            ...values,
        };

        this.props.addNote(note)
    };

    public render() {
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
            <Box flat collapseHorizontal>
                <form onSubmit={pipe(handleSubmit, form.reset)}>
                    <Box flat collapse display="flex" flexDirection="row" justifyContent="stretch">
                        <TextInput name="title" leftIcon="new-object" />
                        <TextInput name="description" fill/>
                        <Box collapse display="flex" justifyContent="stretch" alignItems="stretch">
                            <Button type="submit" text={ADD}/>
                        </Box>
                    </Box>
                </form>
            </Box>
        )
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNote: (note: INote) => {
        dispatch(addNote(note))
    }
});

export default connect<{}, IDispatchProps, IOwnProps, AppState>(null, mapDispatchToProps)(NoteForm);
