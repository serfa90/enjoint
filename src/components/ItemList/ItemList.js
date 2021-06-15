import React, {useState, useEffect} from 'react';
import { Item } from '../Item/Item.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {ItemListStyles} from './ItemListStyles'
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme)=> ItemListStyles(theme));

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 1, 
                    title: 'Carpa de Cultivo Indoor 60x60x160 cm', 
                    description: 'Carpa de cultivo para interior 60x60x160 cm', 
                    price: 15500,
                    picture:{
                        foto:'https://picsum.photos/100',
                        alt: "Carpa 60x60x160cm"
                    },
                    stock: 10
                },
                {
                    id: 2, 
                    title: 'Top Crop Top Veg 250ml', 
                    description: 'Fertilizante marca Top Crop 250ml', 
                    price: 800,
                    picture:{
                        foto: 'https://picsum.photos/100',
                        alt: "Top Crop Top Veg"
                    },
                    stock: 22
                },
                {
                    id: 3, 
                    title: 'Panel LED 300W Growtech', 
                    description: 'Panel LED 300W marca Growtech full espectro', 
                    price: 24500,
                    picture:{
                        foto: 'https://picsum.photos/100',
                        alt: "Panel LED 300W"
                    },
                    stock: 6
                },
                {
                    id: 4, 
                    title: 'Sustrato JuaniJuana 25lts 80-20', 
                    description: 'Sustrato marca JuaniJuana 25lts 80% coco 20% hummus', 
                    price: 700,
                    picture:{
                        foto: 'https://picsum.photos/100',
                        alt: "Sustrato JuaniJuana 80-20"
                    },
                    stock: 15
                }
            ]
        ), 2000)
    })
}

export const ItemList = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const iniciarItemList = () => {

        myPromise().then(data => {setData(data)})
    }

        useEffect(() => {iniciarItemList()}, [])
    
    
        return <>
        
            { data.length === 0 ? (<div className={classes.root}><CircularProgress/></div>) : (
            <Grid container>
                 <Grid item xs={12}>
                     <Grid container justify="center">
                         {data.map((elem)=><Item key={elem.id} 
                          id={elem.id} 
                          title={elem.title} 
                          description={elem.description}
                          price={elem.price}
                          picture={elem.picture.foto}  
                          alt={elem.picture.alt}
                          stock={elem.stock}
                            />)}
                        </Grid>
                    </Grid>
                </Grid>)
    }
        </>
    }