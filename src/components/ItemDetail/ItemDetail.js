import React from 'react';
import { makeStyles } from '@material-ui/core';
import {ItemDetailStyle} from './ItemDetailStyle';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=> ItemDetailStyle(theme));

export const ItemDetail = props => {
   
    const classes = useStyles();
   
    const { title, description, price, picture} = props;

   return <div className={classes.root}>
       <div>
           <img src={picture.foto} alt={picture.alt}/>
       </div>
       <div>
        <Typography variant="h4" component="h2" color="textPrimary">{title}</Typography>
        <Typography variant="body1" component="p" color="textPrimary">{description}</Typography>
        <Typography variant="body2" component="p" color="textSecondary">${price}</Typography>
       </div>
   </div>
};

export default ItemDetail