import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import InfoContext from './ClassContext';
import List from './components/List';
import Form from './components/Form';



const App = () => {

  return (
   <>
    <InfoContext>
      <Form />
      <List /> 
    </InfoContext>
   
   </>
  )
}

export default App