import React from 'react';
import { makeStyles } from '@material-ui/core'
import { ItemListStyles } from './ItemListStyles'
import { Item } from '../Item/Item'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ItemListStyles(theme));

export const ItemList = props => {

    const classes = useStyles();
    const { productos } = props;

  return <>
          
    { productos.length === 0 ? (<div className={classes.root}><CircularProgress/></div>) : (
      <Grid container>
           <Grid item xs={12}>
               <Grid container justify="center">
                   {productos.map((producto)=> <Link to={`/detalle/${producto.id}`} className={classes.lista}>
                  <Item key={producto.id} producto={producto}/>
                     </Link>)}
                  </Grid>
              </Grid>
          </Grid>)
}
  </>;
}
