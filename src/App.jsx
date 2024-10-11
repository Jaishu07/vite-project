import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter ,RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dasbord from './components/Dasbord';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Courses from './components/Courses';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
         <Navbar/>
               <Home/>
              
      </div> 
    },
    {
      path:"/About",
      element:  <div>
        <Navbar/>
      <About/>
      
          </div> 
    },
    {
      path: "/Dasbord",
      element:  <div>
        <Navbar/>
       <Dasbord/>
      
          </div> ,
        children:[{
          path:'Courses',
          element:<Courses/>
        }]
    },
    {
      path: "*",
      element:  <div>
        {/* <Navbar/> */}
         <Notfound/>
      
          </div> 
    },
  ]
)


function App() {
  

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
