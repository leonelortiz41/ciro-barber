import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home, Services,Reservation, Contacts} from './components/App.jsx'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Services/>
    <Reservation/>
    <Contacts/>
  </React.StrictMode>,
)
