import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useToken from '../../../../hooks/useToken';

const Register = () => {

    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const [registerError, setRegisterError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    // const [imgUrl, setImgUrl] = useState('');
    // console.log(imgUrl);

    const navigate = useNavigate();

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const imgHostKey = "7be5891c412694d2c71228341a247974";
    console.log("key", imgHostKey);

    if (token) {
        navigate('/');
    }
    const handleRegister = data => {

        const role = getValues('role');
        const profilePhoto = data.userProfile[0];
        console.log(profilePhoto);
        const formData = new FormData();
        formData.append('image', profilePhoto)

        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`

        setRegisterError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully');

                // update
                const profile = {
                    displayName: data.name,
                }

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgData => {
                        if (imgData.success) {
                            profile.photoURL = imgData.data.url;
                            updateUser(profile)
                                .then(() => {
                                    saveUser(data.name, data.email, role);

                                })
                                .catch(er => {
                                    toast.error(er.message);
                                })
                        }
                    })
            })
            .catch(err => {
                toast.error(err.message);
                setRegisterError(err.message);
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })

    }



    // login with google
    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                setCreatedUserEmail(user.email);
                toast.success('User Created Successfully.');
            })
            .catch(err => {
                toast.error(err.message);
                setRegisterError(err.message);
            })
    }




    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-center text-xl text-green-400'>Register</h2>
                <h2 className='text-2xl text-center text-sky-400'>Welcome to Phone's Bazar</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'  {...register("name", {
                            required: 'Without your name you can not register'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='file' {...register("userProfile", {
                            required: 'image is required',
                        })} />
                        {errors.password && <p className='text-[12px] text-red-600 pt-3'>{errors.password.message}</p>}
                    </div >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-[12px] text-red-600 pt-3'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", {
                            required: 'Password is Required',
                            minLength: { value: 6, message: 'Your password must be at least 6 characters or longer' },
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-[12px] text-red-600 pt-3'>{errors.password.message}</p>}
                    </div >

                    <div className="form-control w-full max-w-xs">

                        <div className='flex justify-between mt-5'>
                            <label className="label"><span className="label-text text-xl font-semibold mr-4">I would like to:</span></label>
                            <select
                                {...register("role")}
                                className="select select-bordered lg:w-[160px] md:w-[160px] w-[130px]">
                                <option selected defaultValue={'Buyer'} >Buyer</option>
                                <option defaultValue={'Seller'} >Seller</option>
                            </select>
                        </div>

                    </div>

                    <input className='btn btn-accent w-full mt-5' value='Register' type="submit" />
                    {
                        registerError && <p className='text-[12px] text-red-600 pt-3'>{registerError}</p>
                    }
                </form>
                <p className='mt-3'>
                    <span>Already have an account?
                        <Link className='text-secondary' to='/login'> Please Login</Link>
                    </span>
                </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;
