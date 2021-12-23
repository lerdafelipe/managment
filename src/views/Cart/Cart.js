import React, {useContext, useRef} from 'react';
//Import the context of the cart
import { CartContext } from '../../Context/CartContext';
//Style
import './Cart.css';
//Import component 
import ItemCart from '../../components/ItemCart';
//Import the image if the product doesn't exist
import noresults from './img.svg';
import { db } from '../../firebase/firebase';
import Header from '../../components/Header';


function Cart() {
    //Import functions from Cart Context
    const {CartItems, removeItem, clearCart, totalProduct, total, cartNumber, dailyDifference, costeTotal} = useContext(CartContext);
    const date = useRef(null);
    
    const sendOrder = () =>{
        if(date.current.value !== ""){
            let newSale = {date: date.current.value, diference: dailyDifference, productos: cartNumber, coste: costeTotal, total: total, items: CartItems};
            const sales = db.collection('ventas');
            const products = db.collection('productos');
            sales.add(newSale).then(alert('Venta registrada'));
            for(let element of CartItems){
                let newStock = element.item.stock - element.cantidad;
                products.doc(element.item.id).update({stock: newStock})
            };
            clearCart();
        }
        else{ alert('Elige la fecha a contabilizar')};
    }
    
    //If in the cart isn't any product, return the next lines
    if(cartNumber === 0){
        return (<>
                    <Header/>
                        <div className="no-found_container">
                            <p>Ups! No se han encontrado elementos en el carrito</p>
                            <img alt="no-found-product" src={noresults}></img>
                        </div>
                    </>)
        }

        return ( 
            <>
            <Header/>
            <div className="container"> 
                <div className="cart-container">
                    <h2>Registro de compra diaria</h2> 
                    <div className='date-Container'>
                        <p>Elige el día a contabilizar:</p>
                        <input type="date" ref={date}></input> 
                    </div>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cant.</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CartItems.map((Item)=>{
                                    return (<ItemCart 
                                                key={Item.item.id} 
                                                item={Item} 
                                                unitary={totalProduct(Item)} 
                                                remove={()=>removeItem(Item.item.id)}>
                                    </ItemCart>)})}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><h5> Total:    ${total}</h5></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-container_Button">
                        <button className="clear-cart" onClick={clearCart}>
                            Vaciar Carrito
                        </button>
                        <button className="end-purchase" onClick={sendOrder}>
                            Terminar compra diaria
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
