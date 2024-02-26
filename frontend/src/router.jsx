import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "surveys",
                element: <Surveys />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]);

export default router;
