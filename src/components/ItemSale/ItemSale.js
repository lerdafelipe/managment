import React from 'react'
//Import the icon for remove item
import {AiOutlineEye} from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
import { db } from '../../firebase/firebase';
//
import './index.css';

const deleteSale = (e)=>{
        let id = e.target.id;
        if(id !== null && id !== undefined && id !== ''){
            const sales = db.collection('ventas');
            sales.doc(id).delete().then(alert('Venta Borrada'));
        }else return;
    }


function ItemCart({sale}) {


    const soon = ()=>{
        alert('Pronto funcionará esta opción')
    }

    return (
        <>
            <tr className='itemSale'>
                <td>{sale.date}</td>
                <td>{sale.productos}</td>
                <td>${sale.total}</td>
                <td>${sale.coste}</td>
                <td>${sale.diference}</td>
                <td className='button-celd'>
                        <MdDelete id={sale.id} onClick={deleteSale}/>
                        <AiOutlineEye onClick={soon} className="cart-Trash"/>
                </td>
            </tr>
        </>
    );
}


export default ItemCart;