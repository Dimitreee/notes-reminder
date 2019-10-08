import * as React from 'react';
import { connect } from 'react-redux';

import { Card, Elevation } from "@blueprintjs/core";

import { AppState } from 'src/store';
import { notesDictSelector } from 'src/selectors/notesSelectors';
import s from './Note.module.css';

import { Paragraph } from 'src/components/typography';

interface INoteOwnProps {
    id: string,
}

interface INoteStateProps {
    id: string,
    text: string
}

const Note: React.FC<INoteOwnProps & INoteStateProps> = ({ id, text }) => {
    return (
        <Card elevation={Elevation.ONE} interactive className={s.root}>
            <span>{id}</span>
            <Paragraph>{text}</Paragraph>
        </Card>
    );
};


const mapStateToProps = (state: AppState, ownProps: INoteOwnProps) => {
    const notesDict =  notesDictSelector(state);

    return notesDict[ownProps.id]
};


export default connect<INoteStateProps, {}, INoteOwnProps, AppState>(mapStateToProps)(Note)
