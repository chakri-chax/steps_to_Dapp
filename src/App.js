import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import GreetMsg from './GreetMsg'
import PaymentPage from './PaymentPage'
import Home from './Home'
import Form from './Form'
import MyBooks from './MyBooks'
import TransationQr from './TransationQr'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Form" element={<Form />} />
    <Route path="/MyBooks" element={<MyBooks />} />
    <Route path ="MyBooks/TransactionQr" element = {<TransationQr/>}/>

  </Routes>
  )
}

export default App