import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Login = () => {
    const{user} = useContext(AuthContext);
    console.log(user.name);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, data);
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-center text-xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='pt-3 text-[12px] text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.password && <p className='pt-3 text-[12px] text-red-600'>{errors.password?.message}</p>} */}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {/* {
                            loginError &&
                            <p className='pt-3 text-[12px] text-red-600'>{loginError}</p>
                        } */}
                    </div>
                </form>
                <p className='mt-3'>
                    <span className='text-blue-300'>New to Phone's Bazar's?
                        <Link className='text-red-400' to='/register'> Create new account</Link>
                    </span>
                </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );

};

export default Login;