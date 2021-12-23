import React from 'react';
//Styles
import './Main.css';
//Import component Navbar
import NavBar from '../NavBar/index';
import img from './logo192.png';

function Main() {
    return (
        <div className="main-container">
            <img src={img} alt="Logo-Marca"/>
            <NavBar/>
        </div>
    );
}

export default Main;
