import React from 'react'
import LandingPage from './components/landing-page/Landing-page';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Sign-up-Page/Signup';
import Login from './components/loginpage/Login';
import Homepage from './components/homepage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/homepage",
    element: <Homepage />
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App;