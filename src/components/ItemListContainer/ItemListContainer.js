import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    texto: {
        color: 'red',
        marginLeft: 10,
        marginTop: -25,
    },

}));

export const ItemListContainer = props => {

    const classes = useStyles();
    
    return <h1 className={classes.texto}>PRÓXIMAMENTE..</h1>
}