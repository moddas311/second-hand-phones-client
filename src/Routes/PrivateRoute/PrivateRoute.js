import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../components/shared/Loading/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;