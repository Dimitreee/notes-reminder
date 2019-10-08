import * as React from 'react';
import Box from 'src/components/Box';

const List: React.FC<{}> = ({ children }) => {
    const content = React
        .Children
        .map(children, (child, index) => (<Box key={index}>{ child }</Box>));

    return (
        <Box>
            { content }
        </Box>
    )
};

export default List;

