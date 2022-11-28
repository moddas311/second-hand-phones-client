import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddPhones = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;


    const handleAddPhone = data => {
        const img = data.img[0];
        const formData = new FormData();



        formData.append('img', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const usedPhones = {
                        category_Id: data.category_Id,
                        img: imgData.data.url,
                        name: data.name,
                        sellerName: data.sellerName,
                        location: data.location,
                        sellPrice: data.sellPrice,
                        originalPrice: data.originalPrice,
                        used: data.used,
                        postedDate: data.postedDate
                    }

                    fetch('http://localhost:5000/usedPhones', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(usedPhones)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.sellerName} Your phone added for sale!`)
                        })
                }
            })
    }



    return (
        <div className='max-h-[400px]'>
            <p className='text-2xl text-blue-400 ml-[90px]'>Add  Phone For Sale</p>
            <div className='hero min-h-scree max-w-[500px]'>
                <div className=' hero-content flex-col'>
                    <form onSubmit={handleSubmit(handleAddPhone)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type='text'  {...register("sellerName", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone's Model</span>
                            </label>
                            <input type='text'  {...register("name", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Picture of your phone</span>
                            </label>
                            <input type='file' {...register("img", {
                                required: 'image is required',
                            })} />
                            {errors.password && <p className='text-[12px] text-red-600 pt-3'>{errors.password.message}</p>}
                        </div >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type='location'  {...register("location", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sell Price</span>
                            </label>
                            <input type='number'  {...register("sellPrice", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type='number'  {...register("originalPrice", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Used duration</span>
                            </label>
                            <input type='text'  {...register("used", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sell Price</span>
                            </label>
                            <input type='date'  {...register("postedDate", {
                                required: 'Without your name you can not register'
                            })} className="input input-bordered" />
                            {errors.name && <p className='text-[12px] text-red-600 pt-3'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <div className='flex justify-between mt-5'>
                                <label className="label"><span className="label-text text-xl font-semibold mr-4">I would like to:</span></label>
                                <select
                                    {...register("category_Id")}
                                    className="select select-bordered lg:w-[160px] md:w-[160px] w-[130px]">
                                    <option selected defaultValue={'iPhone'} >iPhone</option>
                                    <option defaultValue={'Samsung'} >Samsung</option>
                                    <option defaultValue={'One Plus'} >One Plus</option>
                                </select>
                            </div>
                        </div>

                        <input className='btn btn-accent mx-auto mt-5' value='Add Phone' type="submit" />
                        {/* {
                    registerError && <p className='text-[12px] text-red-600 pt-3'>{registerError}</p>
                } */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPhones;