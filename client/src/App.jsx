import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './container/Home'

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LogIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App