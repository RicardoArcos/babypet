// Formulario añadir articulos
import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/context';

import { db, uploadFile } from '../firebase/firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore";

export const AddArticleForm = () => {
    
    const context = useContext(Context);

    const [form, setForm] = useState({
        name: '',
        brand: '',
        category: -1,
        available: false,
        amount: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        description: '',
        imageURL: ''
    })

    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    } 

    const handleSelectChange = (e, name) => {
        setForm({
            ...form,
            [name]: e.target.value
        })
    }

    const handleCheckChange = (e, name) => {
        setForm({
            ...form,
            [name]: e.target.checked
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageURL = await uploadFile(file)

        let obj = {
            name: form.name,
            brand: form.brand,
            category: form.category,
            available:  form.available,
            amount: form.amount,
            buyingPrice: form.buyingPrice,
            sellingPrice: form.sellingPrice,
            description: form.description,
            imageURL: imageURL
        }
        //await setDoc(doc(db, "products", form.name), obj);

        const docRef = await addDoc(collection(db, "products"), obj);
        alert('Se ha guardado el producto.')
    }

    const retrieveData = async () => {
        let categories = [];
        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            categories.push(doc.data().name);
        });
        context.setState({
            ...context.data,
            categories
        })
    }

    useEffect(() => {
        //traer datos
        retrieveData();
    }, [])

    return(
        <div className="container py-3 h-100" id="div-form">
            <form onSubmit={handleSubmit}>
                {/* campo nombre del producto */}
                <div className="form-outline mb-4 w-100 ">
                    <label className="form-label" htrmlFor="form2Example1">Nombre del producto:</label>
                    <input type="text" name="name" className="form-control " placeholder="Juguete entrenador" 
                        value={form.name}
                        onChange={handleInputChange} /> 
                </div>
                {/* campo de la marca */}
                <div className="form-outline mb-4 w-100 ">
                    <label className="form-label" htrmlFor="form2Example1">Marca del producto:</label>
                    <input type="text" name="brand" className="form-control " placeholder="Marca S.A. de C.V" ç
                        onChange={handleInputChange} 
                        value={form.brand} />
                </div>
                {/* categoria */}
                <div className="form-outline mb-4 w-100 ">
                    <label className="form-label" htrmlFor="form2Example1">Categoría:</label>
                    <select className="form-select" id="inputGroupSelect01" onChange={(e) => handleSelectChange(e, 'category')}>
                        <option selected value={-1}>Elija una categoria...</option>
                        {
                            context.state.categories.map((item, i) => 
                                <option key={i} value={i}>{item}</option>    
                            )
                        }
                    </select>
                </div>
                {/* cantidad y disponibilidad */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" htrmlFor="form2Example1">Disponibilidad:</label>
                    <input className="form-check-input mx-2" type="checkbox" aria-label="Checkbox for following text input" 
                        onChange={(e) => handleCheckChange(e, 'available')} checked={form.available} />
                </div>
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" htrmlFor="form2Example1">Cantidad:</label>
                    <input type="number" name="amount" className="form-control w-25" 
                        onChange={handleInputChange}
                        value={form.amount} />
                </div>
                {/* precio de compra */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" htrmlFor="form2Example1">Precio de compra:</label>
                    <input type="number" name="buyingPrice" inputmode="decimal" step=".01" className="form-control" placeholder="$123.45" 
                        onChange={handleInputChange} 
                        value={form.buyingPrice} />
                </div>
                {/* precio de venta*/}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" htrmlFor="form2Example1">Precio de venta:</label>
                    <input type="number" name="sellingPrice" inputmode="decimal" step=".01" className="form-control" placeholder="$123.45" 
                        onChange={handleInputChange} 
                        value={form.sellingPrice} />
                </div>
                {/* descripción */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" htrmlFor="form2Example1">Descripción del artículo:</label>
                    <textarea className="form-control" name="description" rows="5" id="comment" 
                        onChange={handleInputChange} 
                        value={form.description}></textarea>
                </div>
                {/* imágenes */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" htrmlFor="form2Example1">Imágenes del artículo:</label>
                    <input type="file" className="form-control"
                        onChange={(e) => setFile(e.target.files[0])}>    
                    </input>
                </div>
                {/* botón */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Guardar</button>
                </div>
            </form>
        </div>
    );
}