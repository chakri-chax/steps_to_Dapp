import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import GreetMsg from './GreetMsg'
import PaymentPage from './PaymentPage'
import Home from './Home'
import Form from './FigmaForm'
import MyBooks from './FigmaBooks'
import { FigmaBook } from "./FigmaBook";
import TransationQr from './FigmaTransactions'
import SignUp from './SignUp'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Borrow" element={<Form />} />
    <Route path="/MyBooks" element={<MyBooks />} />
    <Route path ="MyBooks/TransactionQr" element = {<TransationQr/>}/>
    <Route path ="/Book" element = {<FigmaBook/>}/>
    <Route path='/signUp' element = {<SignUp/>}/>

  </Routes>
  )
}

export default App