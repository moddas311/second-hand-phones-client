import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/pages/Blog/Blog";
import Admin from "../../components/pages/Dashboard/Addmain/Admin";
import AllBuyers from "../../components/pages/Dashboard/AllBuyers/AllBuyers";
import AddPhones from "../../components/pages/Dashboard/AllSellers/AddPhones/AddPhones";
import AllSellers from "../../components/pages/Dashboard/AllSellers/AllSellers";
import MyBooking from "../../components/pages/Dashboard/MyBooking/MyBooking";
import Home from "../../components/pages/Home/Home/Home";
import Login from "../../components/pages/Login/Login/Login";
import Register from "../../components/pages/Login/Register/Register";
import Phones from "../../components/pages/Phones/Phones";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Phones /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://used-product-seller-assignment-server-side.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking />
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyers />,

            },
            {
                path: '/dashboard/admin',
                element: <AdminRoute><Admin /></AdminRoute>
            },
            {
                path: '/dashboard/seller',
                element: <SellerRoute><AllSellers /></SellerRoute>
            },
            {
                path: '/dashboard/addPhone',
                element: <SellerRoute><AddPhones /></SellerRoute>
            }
        ]
    }
])