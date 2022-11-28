import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../components/shared/Navbar/Navbar';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar />

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li>
                            <Link to='/dashboard'>My Bookings</Link>
                        </li>
                        {
                            isSeller &&
                                <li>

                                    <Link to='/dashboard/seller'>All Seller</Link>
                                </li>
                        }
                        {

                            isAdmin &&
                            <>
                                <li>
                                    <Link to='/dashboard/buyers'>All Buyers</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/seller'>All Seller</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/admin'>Admin</Link>
                                </li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;