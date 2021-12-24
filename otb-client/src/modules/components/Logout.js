import React, { useContext, useEffect } from 'react';
import { Consumer } from '../context/index';
import { useNavigate } from 'react-router-dom';

const Logout = ({ location }) => {
    const context = useContext(Consumer);
    const navigate = useNavigate();

    useEffect(() => {
        context.actions.signOut();
        navigate('/login');
    }, [location])

    return (
        <>
        </>
    );
}

export default Logout;
