/* router */
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/* pages */
import Home from "./pages/Home/page";
import Users from "./pages/Users/page";
import Products from "./pages/Products/page";
import Navbar from "./components/Navbar/page";
import Menu from "./components/Menu/page";

/* styles */
import "./styles/global.scss";
const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="container">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/products",
                element: <Products />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
