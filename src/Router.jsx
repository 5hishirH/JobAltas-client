import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout"
import ErrorEle from "./Pages/ErrorEle"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import AddJobs from "./Pages/AddJobs";
import PrivateRoute from "./PrivateRoute";
import MyJobs from "./Pages/MyJobs";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorEle></ErrorEle>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/myJobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            }
        ]
    }
])

export default Router;