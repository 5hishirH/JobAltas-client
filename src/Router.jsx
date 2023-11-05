import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout"
import ErrorEle from "./Pages/ErrorEle"
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorEle></ErrorEle>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default Router;