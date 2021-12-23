import React, {createContext, useState} from 'react';
//Exporting CartContext
export const CartContext = createContext();

//Creating and exporting The provider from CartContext
export function CartProvider({defaultValue = [], children}) {
    //Declaring the array of products in the cart
    const [CartItems, setCartItems] = useState(defaultValue);

    //Function for remove items from cart
    const removeItem = (id)=>{
        setCartItems (CartItems.filter(({item})=> item.id !== id));
    }

    //Function that return the quantity of products in the cart
    const cartNumber = CartItems.reduce((totalNumber, item)=>{
        return item.cantidad + totalNumber
    }, 0)

    //Function add item to the cart context
    const addItem = (item, cantidad)=>{
        let repetitive = [];
        //If the product is repetitive, the next method find the index, and return it
        repetitive= CartItems.findIndex(Item => item.id === Item.item.id);
        //If the product isn't in the cart, that will be added
        if(repetitive===-1){
            setCartItems([...CartItems,{item, cantidad}]);
        }
        //If the product is in the cart, increment his quantity
        else{
            let itemModifier = [...CartItems];

            itemModifier[repetitive].cantidad += cantidad;
            
            setCartItems(itemModifier);
        }
    };

    //Function, return the subtotal of a product
   const totalProduct = (item)=>{
       return item.item.price * item.cantidad;
   }

   //Functuion, return the total of all products
   const total = CartItems.reduce((totalPrice, item)=>{
        return (item.item.price * item.cantidad) + totalPrice;
    }, 0);
    
    //Function, remove all the producto of the cart
   const clearCart = ()=>{
    setCartItems([]);
    }

    const dailyDifference = CartItems.reduce((totalPrice, item)=>{
        return ((item.item.price * item.cantidad) - (item.item.coste * item.cantidad)) + totalPrice;
    }, 0);

    const costeTotal = CartItems.reduce((totalPrice, item)=>{
        return (item.item.coste * item.cantidad) + totalPrice;
    }, 0);

    
    //exporting the function from cart provider
    return <CartContext.Provider value={{CartItems, addItem, removeItem, clearCart, totalProduct, total, cartNumber, dailyDifference, costeTotal}}>{children}</CartContext.Provider>
}
