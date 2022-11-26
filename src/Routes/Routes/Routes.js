import { createBrowserRouter } from "react-router-dom";
import About from "../../components/pages/About/About";
import MyBooking from "../../components/pages/Dashboard/MyBooking/MyBooking";
import Home from "../../components/pages/Home/Home/Home";
import Login from "../../components/pages/Login/Login/Login";
import Register from "../../components/pages/Login/Register/Register";
import Phones from "../../components/pages/Phones/Phones";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/about',
                element: <About />
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Phones /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
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
            }
        ]
    }
])