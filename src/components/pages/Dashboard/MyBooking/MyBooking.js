import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const MyBooking = () => {

    const { user } = useContext(AuthContext);

    const url = `https://used-product-seller-assignment-server-side.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h4 className='text-3xl font-semibold pb-3'>My Booking</h4>
            <div className="overflow-x-auto mr-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL NO.</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings &&
                                bookings.map((book, i) => <tr
                                    key={book._id}
                                >
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className='avatar'>
                                            <div className="w-16 rounded-full">
                                                <img className='rounded-1/2' alt='userImage' src={user.photoURL} />
                                            </div>
                                        </div>
                                    </th>

                                    <td>{book.name}</td>
                                    <td>{book.model}</td>
                                    <td>{book.sellPrice}</td>
                                    <td>{book.location}</td>
                                    <td>
                                        <button className='btn btn-xs'>pay</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default MyBooking;