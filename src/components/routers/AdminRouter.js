import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from '../../context/context';

export const AdminRouter = ({ children }) => {
    
    const context = useContext(Context);

    if(context.state.user && context.state.user.role === 'admin') {
        return children;
    }
    
    return <Navigate to={'/admin-view'} />;
}
