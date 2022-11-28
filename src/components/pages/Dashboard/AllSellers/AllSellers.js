import React, { useEffect, useState } from 'react';

const AllSellers = () => {

    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users?type=seller')
            .then(res => res.json())
            .then(data => {
                setSellers(data);
                console.log(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-3xl text-sky-400 py-5 ml-10 font-semibold'>Sellers</h2>
            <div className="overflow-x-auto mx-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL NO.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Uer Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr
                                    key={seller._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;