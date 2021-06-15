import React from 'react'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {CartWidget} from '../src/components/CartWidget/Cartwidget'



const App = props => {

  return <>

  <NavBar>
    <CartWidget/>
  </NavBar>
  <ItemListContainer/>
 
  </>
}

export default App;
