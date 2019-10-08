import * as React from 'react';
import classNames from 'classnames';

import s from './Box.module.css';

// should be nested onto flex-container
enum Position {
    LEFT = 'LEFT',
    CENTER = 'CENTER',
    RIGHT = 'RIGHT',
};

interface IBoxProps {
    position?: Position,
}

const Box: React.FC<IBoxProps> = (props) => {
    const { children, position } = props;

    const className = classNames(s.root, {
        [s.rightSide]: position === Position.LEFT,
        [s.leftSide]: position === Position.RIGHT,
        [s.centered]: position === Position.CENTER,
    });

    return (
        <div className={className}>
            {children}
        </div>
    )
};

export { Position as BoxPosition };
export default Box;
