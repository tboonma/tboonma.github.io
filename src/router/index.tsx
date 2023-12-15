import Home from "@src/pages/Home";
import NotFound from "@src/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router  = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    }
])