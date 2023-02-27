import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {
} from "react-router-dom"
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom';

import {
  createBrowserRoute,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './page/error_page/ErrorPage';
import Contact from './page/contact/Contact';
import About from './page/about/About';
import Admin from './page/admin/Admin';
import Home from './page/home/Home';
import Layout from './page/Layout/Layout';
import Lists from './page/admin/components/Lists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/About",
        element: <About />
      },

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/admin",
        element: <Admin />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "admin/lists",
            element: <Lists />
          }
        ]
      }
    ],



  }
])

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <RouterProvider router={router} />
  </MantineProvider>
);

