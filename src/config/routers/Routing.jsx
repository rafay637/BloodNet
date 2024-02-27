import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Screen_handling } from '../../screens/Screen_handling';
import { Home } from '../../pages/Home';
// import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';

export const Routing = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Screen_handling />} />
        <Route path='home' element={<Home />} />
        {/* <Route path='navbar' element={<Navbar />} /> */}
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
