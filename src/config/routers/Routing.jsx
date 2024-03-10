import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Screen_handling } from '../../screens/Screen_handling';
import { Home } from '../../pages/Home';
import { Private_routes } from './Private_routes';
import { Public_routes } from './Public_routes';
// import { Layout } from '../../pages/Layout';
import { Donor } from '../../pages/Donor';
import { My_Donation } from '../../pages/My_Donation';
import { Patient } from '../../pages/Patient';

export const Routing = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Private_routes />}>
          {/* <Route path='' element={<Layout />} /> */}
          <Route path='' element={<Home />} />
          <Route path='patient' element={<Patient />} />
          <Route path='donor' element={<Donor />} />
          <Route path='my-donation' element={<My_Donation />} />
        </Route>

        <Route path='' element={<Public_routes />}>
          <Route path='account-access' element={<Screen_handling />} />
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
