import React, {useEffect, useState} from 'react';
//Styles
import './ItemList.css'
//Component Item
import Item from '../Item/index';
//import firestore/firebase
import { db } from '../../firebase/firebase';


function ItemList() {
    //Products array
    const [productos, setProductos] = useState([]);
    //start loader active
    const [isLoading, setIsLoading] = useState(true);
    //Products data
    const [data, setData] = useState([])

    //Function to find a product
    const search = (e)=>{
        let str = (e.target.value).toLowerCase();
        setData(productos.filter(elem => (elem.name).toLowerCase().includes(str)))
    }

    //Getting products when the component did mount
    useEffect(()=>{
        //Getting products from the collection productos at firestore
        const getProducts = ()=>{
            db.collection('productos').onSnapshot((querySnapshot)=>{
                const docs = [];
                //Pushing info at array docs
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id: doc.id});
                })
                //Pushing docs ata products array
                setProductos(docs);
                setData(docs);
                //finalize loader
                if (docs.length > 0){
                    setIsLoading(false);
                }
            })
        }
        getProducts();
    }, [])


    return (
        <>
            <div className='itemsListContainer'>
                    <input className='search' onChange={search} placeholder='Buscar Producto...'></input>
            </div>
            <div className="itemsListContainer">
                {isLoading ? (<div className="Loader"></div>) : null}
                {data.map( (producto) => { 
                                    return (<div key={producto.id} className="div-cards">
                                                    <Item img={producto.img} name={producto.name} price={producto.price} producto={producto} stock={producto.stock}/>
                                            </div>)}
                                )}
            </div>
        </>
    );
}

export default ItemList;
