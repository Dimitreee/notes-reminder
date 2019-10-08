import * as React from 'react';
import {Field, FieldRenderProps} from 'react-final-form';
import { Text } from '@blueprintjs/core';

import s from './FormError.module.css';

interface ErrorProps {
    name: string
}

const SUBSCRIBE_OPTIONS = {
    touched: true,
    error: true,
};

class FormError extends React.PureComponent<ErrorProps> {
    public render() {
        return (
            <Field
                name={this.props.name}
                subscribe={SUBSCRIBE_OPTIONS}
                render={FormError.renderError}
            />
        );
    }

    private static renderError({ meta }: FieldRenderProps<string, HTMLInputElement>){
        const { touched, error } = meta;

        return (
            touched && error
                ? <Text tagName="span" className={s.errorMessage}>{ error }</Text>
                : null
        )
    }
}

export default FormError;
