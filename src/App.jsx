import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import InfoContext from './ClassContext';
import List from './components/List';
import Form from './components/Form';
import MyForm from './components/MyForm';



const App = () => {

  return (
   <>
  <Routes>
    <Route  path='/' element={
        <InfoContext>
        <Form />
        <List />
         
      </InfoContext>
    }/>

    <Route path="/form" element={<MyForm/>}/>
  </Routes>
   
   </>
  )
}

export default App