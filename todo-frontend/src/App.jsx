import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <>
    
     <div>
      <Home/>
     </div>
     <ToastContainer/>
    </>
  )
}

export default App
