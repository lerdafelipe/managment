import React from 'react';
import {MdDelete} from 'react-icons/md';
import { db } from '../../firebase/firebase';
import EditModal from '../EditModal';


const ItemsTable = ({data}) => {

    const deleteProduct = (e)=>{
        let id = e.target.id;
        if(id !== null && id !== undefined && id !== ''){
            const productos = db.collection('productos');
            productos.doc(id).delete().then(alert('Producto eliminado'));
        }else return;
    }

    return (
        <>
        {data.map(element => {return(<tr key={element.id}>
                                            <td>{element.code}</td>
                                            <td>{element.name}</td>
                                            <td>{element.stock}</td>
                                            <td>{element.coste}</td>
                                            <td>{element.price}</td>
                                            <td>
                                                <MdDelete id={element.id} onClick={deleteProduct}/>
                                                <EditModal product={element}/>
                                            </td>
                                        </tr>)})}
        </>
    )
}

export default ItemsTable;
