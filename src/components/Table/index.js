import React, {useState, useEffect} from 'react';
import { CSVLink } from 'react-csv';
import ItemsTable from '../ItemsTable';
//own styles
import './Table.css';
//import firestore/firebase
import { db } from '../../firebase/firebase';
import Modal from '../Modal/Modal';




const Table = () => {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);


    //Function to find a product
    const search = (e)=>{
        let str = (e.target.value).toLowerCase();
        setData(products.filter(elem => (elem.name).toLowerCase().includes(str)))
    }

    let csvData = products.map(element => {return {Código: element.code, Producto: element.name,stock: element.stock, precio: element.price}});;

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
                setProducts(docs);
                setData(docs.sort((a, b)=>{
                    if(a.code > b.code){return 1;}
                    if(a.code < b.code){return -1;}
                    else{return 0;}}))
            })
        }
        getProducts();
    }, [])

    return (
        <div className='container'>
            <h3>Todos Los Productos</h3>
            <div className='btnsContainer'>
                <CSVLink className='csv-btn' filename='DonAbdonProductos' data={csvData}>Descargar CSV de Productos</CSVLink>
                <Modal/>
            </div>
            <input className='search' onChange={search} placeholder='Buscar Producto...'></input>
            <div className='tableContainer'>
                <table className='tableProducts'>
                    <thead>
                        <tr>
                            <th>Cód.</th>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>P. Compra</th>
                            <th>P. Venta</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemsTable data={data}/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
