import React from 'react';
import { makeStyles } from '@material-ui/core';
import {ItemDetailStyle} from './ItemDetailStyle';
import Typography from '@material-ui/core/Typography';
import {ItemCount} from '../ItemCount/ItemCount'


const useStyles = makeStyles((theme)=> ItemDetailStyle(theme));

export const ItemDetail = props => {
   
    const classes = useStyles();
   
    const { title, detail, price, picture} = props;

   return <div className={classes.root}>
       <div className={classes.picContainer}>
           <img src={picture.foto} alt={picture.alt} className={classes.picture}/>
           <ItemCount/>
       </div>
       <div>
        <Typography variant="h4" component="h2" color="textPrimary" className={classes.title}>{title}</Typography>
        <Typography variant="body1" component="p" color="textPrimary" className={classes.description}>{detail}</Typography>
        <Typography variant="h5" component="p" color="textSecondary" className={classes.price}><b>Precio: </b> ${price}</Typography>
       </div>
   </div>
};

export default ItemDetail