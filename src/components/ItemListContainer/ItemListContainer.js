import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    texto: {
        color: 'green',
        marginLeft: 10,
        marginTop: -25,
    },

}));

export const ItemListContainer = props => {

    const classes = useStyles();
    const {Texto, children} = props;
    
    return  <>
            <h1 className={classes.texto}>{Texto}</h1>;
            {children}
            </>
}

export default ItemListContainer;