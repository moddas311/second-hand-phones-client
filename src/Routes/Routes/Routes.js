import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import Main from "../../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                
            }
        ]
    }
])