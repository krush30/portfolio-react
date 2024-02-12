import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import About from './About';

const Home = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Home;
