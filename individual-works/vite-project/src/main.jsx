import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home'
import './index.css'
import Header from './Header'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from './routes/About'
import ErrorCatching from './assets/components/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        {/* V našem případě zůstává a nemění se, stejný na každé stránce  */}
        <Header />

        {/* pracuje podle cesty v prohlížeči, pracuje s elementam  */}
        <Outlet />

      </div>,

    errorElement:
      <div>
        <Header />
        <ErrorCatching />
      </div>,

    children: [
      {
        // pokud za / nic nestojí, tak je to default route/root/url
        path: "/",
        element: <App />,
      },

      { // to už jsou jednotlivý další page stránek
        path: "/home",
        element:
          <div>
            <App />,
            <Outlet />,
          </div>,
      
      //children může mít další children, musí být ale znovu propsán Outlet
        children: [
          {
            path: "another",
            element:
              <div>
                <h1 className='text-9xl text-center font-thin'>test, this is a test</h1>
              </div>,

          }

        ]
      },

      {
        path: "/about",
        element: <About />,
      },
    ]
  },
]);

//config pro React, práce s index.html 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)