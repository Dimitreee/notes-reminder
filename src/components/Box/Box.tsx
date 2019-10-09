import * as React from 'react';
import classNames from 'classnames';

import s from './Box.module.css';


interface IBoxProps {
    display?: 'block' | 'inlineBlock' | 'flex' | 'inlineFlex',
    flat?: boolean,
    flexDirection?: 'row' | 'column' | 'rowReverse' | 'columnReverse',
    justifyContent?: 'flexStart' | 'spaceBetween' | 'spaceAround' | 'flexEnd' | 'spaceEvenly' | 'stretch',
    alignItems?: 'flexStart' | 'center' | 'flexEnd',
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
        display,
        collapse,
        children,
        alignItems,
        flexDirection,
        justifyContent,
        collapseTop,
        collapseLeft,
        collapseRight,
        collapseBottom,
        collapseVertical,
        collapseHorizontal,
    } = props;

    const className = classNames(
        s.root,
        s[`${display}`],
        {
            [s[`flexDirection-${flexDirection}`]]: flexDirection ,
            [s[`justfyContent-${justifyContent}`]]: justifyContent ,
            [s[`alignItems-${alignItems}`]]: alignItems ,
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

Box.defaultProps = {
    display: 'block',
};

export default Box;
