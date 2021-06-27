import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {botonFinalizarStyles} from './botonFinalizarStyles'

const useStyle = makeStyles((theme) => botonFinalizarStyles(theme));

export const BotonFinalizar = props => {
    
    const classes = useStyle();
    const {botonCancel} = props;
    const history = useHistory();
    return<div>
        <div className={classes.container}>
            <Link className={classes.boton} onClick={() => history.push(`/cart`)}>Finalizar compra</Link>
            <Link className={classes.botonCancelar} onClick={() => botonCancel(false)}>Cancelar</Link>
        </div>
    </div>
    
}