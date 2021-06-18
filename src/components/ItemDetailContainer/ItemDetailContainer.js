import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemDetailContainerStyles } from './ItemDetailContainerStyles';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme)=> ItemDetailContainerStyles(theme));

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 12, 
                    title: 'Carpa de Cultivo Indoor 60x60x160 cm', 
                    description: 'Carpa de cultivo para interior 60x60x160cm. super discreta y sobriaSu altura es perfecta para incorporar todos los accesorios de cultivo. El tamaño es ideal porque se adapta a cualquier ambiente y permite cultivar de una a dos macetas comodamente. ', 
                    price: 15500,
                    picture:{
                        foto:'https://picsum.photos/100',
                        alt: "Carpa 60x60x160cm"
                    }
                }
            ]
        ),2000);
    }); 
};

export const ItemDetailContainer = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const iniciarDetailList = () => {

        myPromise().then(data => {setData(data)})
    }

        useEffect(() => {iniciarDetailList()}, [])
    
    
        return <>
        
        { data.length === 0 ? (<div className={classes.root}><CircularProgress/></div>) : (
        <Grid container>
             <Grid item xs={12}>
                 <Grid container justify="center">
                     {data.map((elem)=><ItemDetail key={elem.id} 
                      title={elem.title} 
                      description={elem.description}
                      price={elem.price}
                      picture={elem.picture.foto}  
                      alt={elem.picture.alt}
                      />)}
                    </Grid>
                </Grid>
            </Grid>)
}
    </>
}

export default ItemDetailContainer
