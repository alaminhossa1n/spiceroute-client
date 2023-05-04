import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Home/Main";
import Home from "../Layout/Home/Home";
import Login from "../Layout/Auth/Login";
import Register from "../Layout/Auth/Register";
import Chef from "../Layout/Home/Chef";
import Blog from "../Layout/Home/Blog";
import PrivetRouts from "./PrivetRouts";
import ErrorPage from "../Layout/Sheard/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://spice-route-server-alaminhossa1n.vercel.app/chef')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: 'chef', 
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <PrivetRouts><Chef></Chef></PrivetRouts>,
                loader: ({params}) => fetch(`https://spice-route-server-alaminhossa1n.vercel.app/chef/${params.id}`)
            }
        ]
    }
])

export default router;