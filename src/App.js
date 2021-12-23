import React from 'react';
//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//
import { CartProvider } from './Context/CartContext';
//Styles
import './App.css';
//Import the views
//Home
import Home from './views/Home/Home';
//Cart
import Cart from './views/Cart/Cart';
//Sales
import Sales from './views/Sales/Sales';
//Purchases
import Purchases from './views/Purchases/Purchases'
//Import the views
//Import component footer
import Footer from './components/Footer/index';


function App() {
  return (
      <>
        <CartProvider>

          <Router>

            <Switch>
                <Route  path="/" exact 
                        component={Home}/>
                <Route  path="/cart" 
                        component={Cart}/>
                <Route  path="/ventas" 
                        component={Sales}/>
                <Route  path="/compras" 
                        component={Purchases}/>
                <Route  path="/auth" 
                        component={Home}/>
            </Switch>

            <Footer/>

          </Router>

        </CartProvider>
      </>
  );
}

export default App;
