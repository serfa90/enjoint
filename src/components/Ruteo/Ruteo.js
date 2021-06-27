import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {ItemListContainer} from '../ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'
import { ItemListContainerFilter } from '../ItemListContainerFilter/ItemListContainerFilter';
import {NavBar} from '../NavBar/NavBar'
import {CartWidget} from '../CartWidget/Cartwidget'
import {Cart} from '../Cart/Cart'

export const Ruteo = () => {

    return <BrowserRouter>
        <NavBar>
        <CartWidget/>
        </NavBar>
    <Switch>
        <Route exact path="/">
        <ItemListContainer/>
        </Route>
        <Route path="/detalle/:id">
         <ItemDetailContainer/>
        </Route>
        <Route path="/categoria/:category">
        <ItemListContainerFilter/>
        </Route>
        <Route path="/cart">
            <Cart/>
        </Route>

    </Switch>
    </BrowserRouter>
}