import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Screen_handling } from '../../screens/Screen_handling';
import { Home } from '../../pages/Home';
import { Private_routes } from './Private_routes';
import { Public_routes } from './Public_routes';
import { Donor } from '../../pages/Donor';
import { Donation } from '../../pages/Donation';
import { Patient } from '../../pages/Patient';
import { Request } from '../../pages/Request';
import { Register } from '../../pages/Register';
import { History } from '../../pages/History';

export const Routing = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Private_routes />}>
          <Route path='' element={<Home />} />
          <Route path='patient' element={<Patient />} />
          <Route path='donor' element={<Donor />} />
          <Route path='donation' element={<Donation />} />
          <Route path='request' element={<Request />} />
          <Route path='register' element={<Register />} />
          <Route path='history' element={<History />} />
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
