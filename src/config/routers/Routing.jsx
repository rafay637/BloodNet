import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Screen_handling } from '../../screens/Screen_handling';
import { Home } from '../../pages/Home';
import { Footer } from '../../components/Footer';

export const Routing = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Screen_handling />} />
        <Route path='home' element={<Home />} />
        <Route path='footer' element={<Footer />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
