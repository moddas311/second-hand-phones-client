import React, { useEffect, useState } from 'react';




const AllBuyers = () => {

    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        fetch('https://used-product-seller-assignment-server-side.vercel.app/users?type=buyer')
            .then(res => res.json())
            .then(data => {
                setBuyers(data);
                console.log(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-3xl text-sky-400 py-5 ml-10 font-semibold'>Buyers</h2>
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
                            buyers.map((buyer, i) =>
                                <tr
                                    key={buyer._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.role}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBuyers;