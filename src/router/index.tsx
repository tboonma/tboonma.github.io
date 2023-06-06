import App from "@src/App";
import NotFound from "@src/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router  = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />
    }
])