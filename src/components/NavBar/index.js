import React, {useState} from 'react'
//Router
import { Link } from 'react-router-dom';
//Styles
import './NavBar.css';
//Component Cart icon
import CartWidget from '../CartWidget/index'
//Import hamburguer menu from react-icons
import {HiMenuAlt1} from 'react-icons/hi'

function NavBar() {
    //Show and hide menu mobile
    const [showMenu, setShowMenu] = useState(false);

    //Toggle for show and hide menu mobile
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className="NavBar">
                <nav>
                    <ul>
                        <Link to="/" className="Link"><p>Inicio</p></Link>
                        <Link to={`/ventas`}  className="Link"><p>Ventas</p></Link>
                        <Link to={`/compras`} className="Link"><p>Compras</p></Link>
                        <Link to="/cart" className="toCart"><CartWidget/></Link>
                    </ul>
                </nav>
            </div>

            <div className="NavMobile">
                <nav>
                    <div className='jusftify'>
                        <button onClick={toggleMenu}><HiMenuAlt1/>Menu</button>
                        <Link to="/cart" className="toCart"><CartWidget/></Link>
                    </div>
                    <ul className={showMenu ? ("active") : null}>
                        <Link to="/" className="Link"><p>Inicio</p></Link>
                        <Link to={`/ventas`}  className="Link"><p>Ventas</p></Link>
                        <Link to={`/compras`} className="Link"><p>Compras</p></Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
