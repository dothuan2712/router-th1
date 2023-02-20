import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './layout';
const router = createBrowserRouter([
  {
    path: '/about',
    element: <Layout />,
    children: [
      {
        path: '/about',
        element: <div>About Us</div>,
      },
      {
        path: '/about/us',
        element: <div>US</div>
      },
      {
        path: '/about/me',
        element: <div>me</div>
      }
    ]
  },
  {
    path: '/404',
    element: <div>404-Not Found</div>
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;