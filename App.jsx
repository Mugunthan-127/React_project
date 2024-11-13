
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Book/Header';
import Register from './Book/Register';
import Login from './Book/Login'
import Contact from './Book/Contact';
import BookTickets from './Book/BookTickets';
import HomePage from './Book/HomePage';
function App () {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/Home' element={<HomePage/>}/>
    <Route path='/Register' element={<Register/>} />
    <Route path='/Login' element={<Login/>}/>
   <Route path='/Contact' element={<Contact/>}/>
   <Route path='/BookTickets' element={<BookTickets/>}/>
  <Route path='/signup' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
   </>
  )
}export default App

