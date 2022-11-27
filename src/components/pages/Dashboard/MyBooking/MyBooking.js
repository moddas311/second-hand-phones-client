import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const MyBooking = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
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
                            {
                                bookings.map((book, i) => <tr
                                    key={book._id}
                                >
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar w-10 rounded-xl">
                                            <img className='rounded-full' alt='userImage' src={user.photoURL} />
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