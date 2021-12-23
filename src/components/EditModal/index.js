import React, {useState} from 'react';
//Import library formik
import {useFormik} from 'formik';
import './index.css';
//
import { db } from '../../firebase/firebase';
//
import {BiEdit} from 'react-icons/bi';

const EditModal = ({product}) => {
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const formik = useFormik({
        initialValues:{
            name: product.name,
            price: product.price,
            img: product.img,
            stock: product.stock,
            coste: product.coste,
            code: product.code
        },
        onSubmit: (producto) =>{
            const products = db.collection('productos');
            products.doc(product.id).update(producto).then(alert('Productos editado exitosamente'));
            setShow(false);
        }
    })


    return (
        <>
            <BiEdit onClick={showModal}/>
            {show ? (<div className='ModalContainer'>
                        <div className='Modal'>
                            <div className='closeModel' onClick={closeModal}>X</div>
                            <h3>Información del producto a agregar</h3>
                            <div className='Formcontainer'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <p>Producto</p>
                                        <input 
                                            type="text"
                                            name="name"
                                            defaultValue={formik.initialValues.name}
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Precio</p>
                                        <input 
                                            type="number"
                                            name="price"
                                            defaultValue={formik.initialValues.price}
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Costo</p>
                                        <input 
                                            type="number"
                                            name="coste"
                                            defaultValue={formik.initialValues.coste}
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Stock</p>
                                        <input 
                                            type="number"
                                            name="stock"
                                            defaultValue={formik.initialValues.stock}
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>Código</p>
                                        <input 
                                            type="number"
                                            name="code"
                                            defaultValue={formik.initialValues.code}
                                            onChange={formik.handleChange}/>
                                    </div>
                                    <div>
                                        <p>URL imagen</p>
                                        <input 
                                            type="text"
                                            name="img"
                                            defaultValue={formik.initialValues.img}
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

export default EditModal;
