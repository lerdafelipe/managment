import React, {useContext} from 'react';
//styles
import './CartWidget.css';
//Import cart icon form library react-icons
import {GrCart} from 'react-icons/gr';
//import Context Cart
import { CartContext } from '../../Context/CartContext';

function CartWidget() {
    //Getting quantity of products from CartContext
    const {cartNumber} = useContext(CartContext);

    return (
    <>
        <span className="cart-widget"><GrCart/><p>{cartNumber}</p></span>
    </>)
}

export default CartWidget;

