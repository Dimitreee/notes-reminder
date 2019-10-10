import * as React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import classNames from 'classnames';

import { InputGroup, IconName, MaybeElement } from '@blueprintjs/core';

import FormError from 'src/components/FormError';
import s from './TextInput.module.css'

interface ITextInputProps {
    name: string,
    fill?: boolean,
    leftIcon?: IconName | MaybeElement,
    withError?: boolean,
    placeholder?: string,
}

class TextInput extends React.PureComponent<ITextInputProps> {
    public render() {
        return (
            <Field
                type="string"
                name={this.props.name}
                render={this.renderInput}
            />
        );
    }

    private renderInput = ({ input, meta }: FieldRenderProps<string, HTMLInputElement>) => {
        const errorInputClassNames = classNames({
            [s.errorInput]: meta.error && meta.touched
        });

        return (
            <>
                <InputGroup
                    {...input}
                    large
                    placeholder={this.props.placeholder}
                    leftIcon={this.props.leftIcon}
                    fill={this.props.fill}
                    className={errorInputClassNames}
                />
                {this.props.withError && <FormError name={this.props.name}/>}
            </>
        )
    }
}

export default TextInput;
