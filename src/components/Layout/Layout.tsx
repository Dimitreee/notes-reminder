import * as React from 'react';
import s from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
    return (
        <div className={s.root}>
            {children}
        </div>
    )
};

export default Layout;
