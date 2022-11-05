import Home from "../Home";
import About from "../About";
import Login from "../Login";
import Contact from "../Contact";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
        },
    {
      path: "/about",
      element: <About />,
         },
   {
     path: "/login",
     element: <Login />,
         },
         {
            path: "/contact",
            element: <Contact />,
                },
     ]);
  export default router;