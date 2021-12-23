import React, {useState} from 'react';
import './index.css';
//Import library formik
import {useFormik} from 'formik';
//
import { db } from '../../firebase/firebase';

const Modal = () => {
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const formik = useFormik({
        initialValues:{
            name: "",
            price: null,
            img: "",
            stock: null,
            coste: null,
            code: null
        },
        onSubmit: (product) =>{
            const products = db.collection('productos');
            products.add(product).then(alert('Productos agregado'));
            setShow(false);
        }
    })

    return (
        <>
            <button onClick={showModal} className="buttonModal">Agregar nuevo producto</button>
            {show ? (<div className='ModalContainer'>
                        <div className='Modal'>
                            <div className='closeModel' onClick={closeModal}>X</div>
                            <h3>Información del producto a agregar</h3>
                            <div className='Formcontainer'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <p>Producto</p>
                                        <input 
                                            required
                                            type="text"
                                            name="name"
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Precio</p>
                                        <input 
                                            required
                                            type="number"
                                            name="price"
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Costo</p>
                                        <input 
                                            required
                                            type="number"
                                            name="coste"
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Stock</p>
                                        <input 
                                            required
                                            type="number"
                                            name="stock"
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Código</p>
                                        <input 
                                            required
                                            type="number"
                                            name="code"
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>URL imagen</p>
                                        <input
                                            required 
                                            type="text"
                                            name="img"
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <button className='btnSendProduct' type='submit'>Guardar Producto</button>
                                </form>
                            </div>
                        </div>
                    </div>) : null}
        </>
    )
}

export default Modal
