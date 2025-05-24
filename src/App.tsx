// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Signup from './components/Auth/Signup';
import Home from './pages/Home';
import Login from './components/Auth/Login';
// import Login from './components/Auth/Login';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-x-hidden '>

        {/* <Navbar /> */}
       <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
       </Routes>
      </div>
    </>
  )
}

export default App
