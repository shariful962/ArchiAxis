import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home"
import AboutUs from '../Pages/AboutUs/AboutUs';
import Projects from '../Pages/Projects/Projects';
import Services from '../Pages/Services/Services';
import ContactUs from '../Pages/ContactUs/ContactUs';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
            path: "/about",
            Component: AboutUs
        },
        {
            path: "/projects",
            Component: Projects
        },
        {
            path: "/services",
            Component: Services
        },
        {
            path: "/contact",
            Component: ContactUs

        }
    ]
  },
]);