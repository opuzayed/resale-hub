import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useSeller from '../hooks/useSeller';
import Header from '../Pages/Shared/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    console.log(isSeller);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {!(isSeller) &&
                            <li><Link to="/dashboard">My Orders</Link></li>
                        }
                        {
                             isSeller && <>
                                <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Products</Link></li>
                         </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;