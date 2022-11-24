import { createBrowserRouter } from "react-router-dom";
import About from "../../components/pages/About/About";
import Home from "../../components/pages/Home/Home/Home";
import Login from "../../components/pages/Login/Login/Login";
import Register from "../../components/pages/Login/Register/Register";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import Main from "../../Layouts/Main";

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
            }
        ]
    }
])