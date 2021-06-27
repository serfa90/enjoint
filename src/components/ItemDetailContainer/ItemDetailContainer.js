import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemDetailContainerStyles } from './ItemDetailContainerStyles';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {jointData} from '../Services/jointData';
import {useParams} from 'react-router-dom';


const useStyles = makeStyles((theme)=> ItemDetailContainerStyles(theme));

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (jointData), 2000)
    })
}

export const ItemDetailContainer = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const { id } = useParams();

    const iniciarDetailList = () => {

        myPromise().then((data) => {
            const dataFiltrada = data.filter((element) => element.id === id);
            setData(dataFiltrada);

        });
    };
    
        useEffect(() => {iniciarDetailList()});

    
        return <>
        
        { data.length === 0 ? (<div className={classes.progreso}><CircularProgress/></div>) : (
        <Grid container>
             <Grid item xs={12}>
                 <Grid container justify="center">
                     {data.map((elem,i)=><ItemDetail key={i} {...elem} className={classes.card} />)}
                    </Grid>
                </Grid>
            </Grid>)
}
    </>
}

export default ItemDetailContainer
