import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';

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
      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </BrowserRouter>
    </RouterProvider>
  );
}

export default App;