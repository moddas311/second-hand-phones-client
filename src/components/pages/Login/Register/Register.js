import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const provider = new GoogleAuthProvider();

    const handleRegister = data => {
        console.log(data);
        setRegisterError('');
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         toast.success('User Created Successfully.');

        //         const userInfo = {
        //             displayName: data.name
        //         }
        //         updateUser(userInfo)
        //             .then(result => {
        //                 const user = result.user;
        //                 console.log(user);
        //             })
        //             .catch(err => {
        //                 console.error(err);
        //             });
        //     })
        //     .catch(err => {
        //         toast.error(err.message);
        //         setRegisterError(err.message);
        //     });
    }

    // login with google
    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
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
                        <input type='file' {...register("file", {
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

                    <div className='flex justify-around mt-2'>
                        <div className='flex justify-center items-center'>
                            <input type="radio" name="type" {...register("type")} className="radio radio-accent" id='seller' value='seller' />
                            <label htmlFor="seller">
                                <span className="label-text">Seller</span>
                            </label>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input type="radio" {...register("type")} name="type" id="buyer" className="radio mr-2" value='buyer' checked />
                            <label htmlFor="buyer">
                                <span className="label-text">Buyer</span>
                            </label>
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