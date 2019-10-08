import * as React from 'react';
import { Text } from '@blueprintjs/core';

const Paragraph: React.FC = ({ children }) => (
    <Text tagName="p" className='bp3-text-large'>{ children }</Text>
);

export default Paragraph
