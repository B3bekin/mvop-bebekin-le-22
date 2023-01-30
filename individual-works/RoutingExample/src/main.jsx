import React, { Children } from "react";
import Root from "./routes/root";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Root, { loader as rootLoader } from "./routes/root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>

//         <nav>
//           <p>logo</p>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contacts">Contacts</Link>  
//         </nav>

//         <h1>Look at me</h1>

//         <Outlet/>

//         <footer>
//           <h6>(I'm completely alone)</h6>
//         </footer>

//       </div>
//     ),

//     children: [
//       {
//         path: "/about",

//         element: (
//           <div>
//             <h2>Here is my Company 😂</h2>
//           </div>
//         ),
//       },
//     ],
//   },
  

// ]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
