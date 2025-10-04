import { Routes,Route } from 'react-router-dom'

import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

import Navbar from './components/Navbar'

import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/log' element={<Login/>} />
        <Route path='/pro' element={<Profile/>} />
    </Routes>

    </>
  )
}

export default App
