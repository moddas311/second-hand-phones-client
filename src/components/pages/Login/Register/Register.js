import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = data => {
        console.log(data);
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
                            required: 'Without your name you can not Sign Up'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                    </div>
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
                    <div className='flex justify-center gap-10 mt-3'>
                        <div className='flex gap-2'>
                            <input className="form-check-input" type="radio" name="radio" id="flexRadioDefault1" value='Seller' />
                            <p>Seller</p>
                        </div>
                        <div className='flex gap-2'>
                            <input className="form-check-input" type="radio" name="radio" id="flexRadioDefault1" />
                            <p>User</p>
                        </div>

                    </div>
                    <input className='btn btn-accent w-full mt-5' value='Register' type="submit" />
                    {/* {
                        signUpError && <p className='text-[12px] text-red-600 pt-3'>{signUpError}</p>
                    } */}
                </form>
                <p className='mt-3'>
                    <span>Already have an account?
                        <Link className='text-secondary' to='/login'> Please Login</Link>
                    </span>
                </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;