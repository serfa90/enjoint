import React from 'react'
import {NavBar} from './components/NavBar/NavBar'
import {CartWidget} from '../src/components/CartWidget/Cartwidget'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'



const App = props => {

  return <>

  <NavBar>
    <CartWidget/>
  </NavBar>
  <ItemDetailContainer/>
 
  </>
}

export default App;
