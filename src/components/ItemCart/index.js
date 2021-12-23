import React from 'react'
//Import the icon for remove item
import {GrTrash} from 'react-icons/gr';
//Import Proptypes
import PropTypes from 'prop-types';

function ItemCart({item, unitary, remove}) {
    return (
        <>
            <tr>
                <td>{item.item.name}</td>
                <td>{item.cantidad}</td>
                <td>${unitary}</td>
                <td>
                    <button onClick={remove}>
                        <GrTrash className="cart-Trash"/>
                    </button>
                </td>
            </tr>
        </>
    );
}

//Declaring the types of props
ItemCart.propTypes= {
    item: PropTypes.object,
    unitary: PropTypes.number,
    remove: PropTypes.func
};

export default ItemCart;
