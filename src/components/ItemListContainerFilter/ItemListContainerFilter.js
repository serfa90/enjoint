import React, {useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import {jointData} from '../Services/jointData';
import {useParams} from 'react-router-dom'


const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (jointData), 2000)
    })
}

export const ItemListContainerFilter = props => {

    const [productos, setProductos] = useState([]);

    const {category} = useParams();
   
    const iniciarItemList = () => {

       
        myPromise().then((producto) => {
                    const productoFiltrado = producto.filter((element) => element.category === category);
                    setProductos(productoFiltrado);
        
                });
                
    };

        useEffect(() => {iniciarItemList()}, [category]);

        return <>
            <ItemList productos={productos}/>
        </>
    }

    export default ItemListContainerFilter; 