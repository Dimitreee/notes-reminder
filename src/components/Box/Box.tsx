import * as React from 'react';
import classNames from 'classnames';

import s from './Box.module.css';

interface IBoxProps {
    flat?: boolean,
    collapse?: boolean,
    collapseTop?: boolean,
    collapseLeft?: boolean,
    collapseRight?: boolean,
    collapseBottom?: boolean,
    collapseVertical?: boolean,
    collapseHorizontal?: boolean,
}

const Box: React.FC<IBoxProps> = (props) => {
    const {
        flat,
        collapse,
        children,
        collapseTop,
        collapseLeft,
        collapseRight,
        collapseBottom,
        collapseVertical,
        collapseHorizontal,
    } = props;

    const className = classNames(s.root, {
        [s.flat]: flat,
        [s.collapse]: collapse,
        [s.collapseTop]: collapseTop,
        [s.collapseLeft]: collapseLeft,
        [s.collapseRight]: collapseRight,
        [s.collapseBottom]: collapseBottom,
        [s.collapseVertical]: collapseVertical,
        [s.collapseHorizontal]: collapseHorizontal,
    });

    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default Box;
