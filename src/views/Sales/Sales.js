import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
//Import component 
import ItemSale from '../../components/ItemSale/ItemSale';
//
import {db} from "../../firebase/firebase";



function Sales() {
    const [sales, setSales] = useState([]);

    useEffect(()=>{
        //Getting products from the collection productos at firestore
        const getSales = ()=>{
            db.collection('ventas').onSnapshot((querySnapshot)=>{
                const docs = [];
                //Pushing info at array docs
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id: doc.id});
                })
                //Pushing docs ata products array
                docs.sort((a, b)=>{
                    if(a.date < b.date){return 1;}
                    if(a.date > b.date){return -1;}
                    else{return 0;}});
                setSales(docs);
            })
        }
        getSales();
    }, []);

    return ( 
        <>
        <Header/>
        <div className="container"> 
            <div className="cart-container">
                <h2>Ventas Mensuales</h2> 
                <div className='tableContainer'>
                    <table className='tableProducts'>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>C. Productos Vend.</th>
                                <th>$ Total</th>
                                <th>$ Costo</th>
                                <th>$ Ganancia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((Item)=>{
                                return (<ItemSale key={Item.diference} sale={Item}/>)})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}

export default Sales;