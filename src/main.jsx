import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
// import Home from './Components/pages/home/Home.jsx';
// import About from './Components/pages/about/About.jsx';
// import Participants from './Components/pages/participants/Participants.jsx';
// import Participate from './Components/pages/participate/Participate.jsx';
// import Contact from './Components/pages/contact/Contact.jsx';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Participants from './Components/pages/Participants';
import Participate from './Components/pages/Participate';
import Contact from './Components/pages/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Participants",
        element: <Participants />
      },
      {
        path: "/Participate",
        element: <Participate />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
