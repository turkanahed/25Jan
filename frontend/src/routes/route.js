import MainRoot from "../components/MainRoot";
import AboutUs from "../pages/AboutUs";
import Add from "../pages/Add";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";

const ROUTES =[
    {
        path:"/",
        element: <MainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            },
            {
                path: "/portfolio",
                element: <Portfolio/>
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/contacts",
                element: <Contacts/>
            },
            {
                path: "/add",
                element: <Add/>
            },
        ]
    }
]

export default ROUTES;