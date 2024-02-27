import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Screen_handling } from '../../screens/Screen_handling';
import { Home } from '../../pages/Home';
import { Footer } from '../../components/Footer';
import { Private_routes } from './Private_routes';
import { Public_routes } from './Public_routes';

export const Routing = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Private_routes />}>
          <Route path='' element={<Home />} />
          <Route path='footer' element={<Footer />} />
        </Route>

        <Route path='' element={<Public_routes />}>
          <Route path='account-access' element={<Screen_handling />} />
          {/* <Route path='account-access' element={<Screen_handling />} /> */}
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
