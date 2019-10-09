import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@blueprintjs/core';

import s from './Paragraph.module.css';

const Paragraph: React.FC = ({ children }) => {
    const className = classNames(s.root, 'bp3-text-large');

    return (
        <Text tagName="p" className={className}>{ children }</Text>
    );
};

export default Paragraph
