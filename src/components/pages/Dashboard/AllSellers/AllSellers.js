import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import UserPhone from '../UserPhone/UserPhone';

const AllSellers = () => {

    const { user } = useContext(AuthContext);


    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch(`https://used-product-seller-assignment-server-side.vercel.app/usedPhones?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPhones(data);
                console.log(data);
            })
    }, [user?.email])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                phones.map(phone => <UserPhone
                    key={phone._key}
                    phone={phone}
                />)
            }
        </div>
    );
};

export default AllSellers;