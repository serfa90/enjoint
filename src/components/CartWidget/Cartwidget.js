import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

export const CartWidget = props => {
    return <>
    <Badge badgeContent={5} color="secondary">
      <ShoppingCartIcon/>
    </Badge>
    
    </>
}