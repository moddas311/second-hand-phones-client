import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ErrorPage = () => {


    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='text-red-600 text-center pt-44'>
            <div>
                <h1 className='text-8xl font-bold'>404</h1>
            </div>
            <div>
                <p className='text-4xl font-semibold'>OOPS...!!</p>
            </div>
            <div>
                <p className='text-xl'>{error.statusText || error.message}</p>
            </div>
            <div className='mt-20'>
                <button onClick={handleLogOut} className='btn btn-outline rounded-lg btn-accent mr-10'>
                    Sign Out
                </button>
                <Link to='/login' className='btn btn-primary bg-gradient-to-r from-primary to-secondary rounded-md text-white'>
                    Login
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;