import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Info from './components/Info';
import Userauth from './components/Userauth';
import Details from './components/Details';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <Navbar />
      <Home />
    </>)
  },
  {
    path: "/about",
    element: (<>
      <Navbar />
      <About />
    </>)
  },
  {
    path: "/contact",
    element: (<>
      <Navbar />
      <Contact />
    </>)
  },
  {
    path: "/info",
    children: [
      {
        path: "user/abcd",
        element: <Info user={true} />
      },
      {
        path: "admin",
        element: <Info user={false} />
      }
    ]
  },
  {
    path: "/auth",
    children: [
      {
        path: ":nam/:numb",
        element: <Details />
      },
      {
        path: "userid/:userID",
        element: <Userauth />
      }
    ]
  },
  {
    path: "*",
    element: (
      <>
        <h1>The page is not found</h1>
      </>
    )
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App