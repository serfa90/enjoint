import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    contenedor: {
        margin: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        width: 200,
    },
    botonMas: {
        marginRight: 5,
        width: 50,
        backgroundColor: "green",
        '&:hover':{
            backgroundColor: "#004000"
        }        
    },
    botonMenos: {
        marginRight: 5,
        width: 50,
        backgroundColor: "grey",
        '&:hover':{
            backgroundColor: "#4c4c4c"
        }
    },
    agregar: {
        marginLeft: -50,
        marginTop: 10,
    }
  }));

export const ItemCount = props => {

    const classes = useStyles();

    const [cantidad, setCantidad] = useState(1);

       const Aumentar = () => {

        if(cantidad === 10){

        }else{
            setCantidad(cantidad + 1);
        }
        
    }
    const Disminuir = () => {

        if (cantidad === 1){

        }else{
            setCantidad(cantidad - 1);
        }
    }
    return <div className={classes.contenedor}>
          <h2 className={classes.contador}>Cantidad: {cantidad}</h2>
          <div className={classes.contBoton}>
              <Button disabled={cantidad===10} className={classes.botonMas} onClick={Aumentar} variant="contained" color="primary">+</Button>
              <Button disabled={cantidad===1} className={classes.botonMenos} onClick={Disminuir} variant="contained" color="secondary">-</Button>
          </div>
                <Button 
                    className={classes.agregar}
                    onClick={e => props.agregar(cantidad)}
                    disabled={cantidad === 0 ? true : false}
                >
                    Agregar al carrito
                </Button>
      </div> 
}