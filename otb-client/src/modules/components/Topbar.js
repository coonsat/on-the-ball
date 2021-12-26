import React, { useContext } from 'react';
import Context from '../context/index';

const Topbar = ({ breadcrumb }) => {
    const context = useContext(Context.Context);

    return (
        <div className="topbar-container">
            {breadcrumb}
        </div>
    )
}

export default Topbar
