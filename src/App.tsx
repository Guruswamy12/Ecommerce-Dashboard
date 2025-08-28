import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Header from './Pages/Header'

const App = () => {
  return (
    <>
    <Header/>
<Dashboard />
    </>
  )
}
export default App
