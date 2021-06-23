import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Ruteo } from './components/Ruteo/Ruteo'



const App = () => {

  return <>
  <BrowserRouter>
   <Ruteo/>
  </BrowserRouter>
  
  </>
}

export default App;
