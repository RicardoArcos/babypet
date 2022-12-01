import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from '../../context/context';

export const UserRouter = ({ children }) => {
    
    const context = useContext(Context);

    if(!context.state.user) {
        return <Navigate to={'/login'} />;
    }
    
    return children;
}
