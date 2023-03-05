import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/Layout/Mani';
import About from './components/About/About';
import Home from './components/Home/Home';
import Order from './components/Order/Order';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('iphones.json'),
          element: < Home ></Home >
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;