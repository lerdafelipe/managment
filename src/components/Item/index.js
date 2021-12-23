import React from 'react'
//Styles
import './Item.css'
//Import image for default props
import img from './card-img.png';
//Import Proptypes
import PropTypes from 'prop-types';
import ItemCount from '../ItemCount';

function Item({img, name, price, stock, producto}) {
    return (
        <>
            <div className="cards"> 
                <div className="card__image">
                    <img src={img} alt="Product" />
                </div>
                <div className="card__details">
                    <h3 className="card__name">{name}</h3>
                    <h4>${price}</h4>
                </div>
                <p>Stock: {stock}</p>
                <ItemCount stock={stock} item={producto}/>
            </div>
        </>
    );
};

//Declaring default prop if the product don´t have a prop detailed
Item.defaultProps = {
    img: img
};
//Declaring the types of props
Item.propTypes= {
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number
};

export default Item;