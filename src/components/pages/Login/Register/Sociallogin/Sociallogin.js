import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../AuthProvider/AuthProvider';
import useToken from '../../../../../hooks/useToken';

const Sociallogin = () => {


    const { googleLogin } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const role = 'Buyer';

    // Google Login system
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email, role);
                toast.success('Login Successful!');

            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const saveUser = (name, email, role) => {

        const user = { name, email, role }

        fetch('https://used-product-seller-assignment-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(user.email);
            })
    }

    return (
        <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Continue With
            Google</button>
    );
};

export default Sociallogin;