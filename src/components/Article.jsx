import React, { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export const Article = ({ productID }) => {

    const [counter, setCounter] = useState(1);
    const [articleData, setArticleData] = useState({
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

    const handleAdd = () => {
        if(counter+1 > articleData.amount){
            setCounter(articleData.amount)
        } else {
            setCounter(counter + 1);
        }
    }

    const handleSubstract = () => {
        if(counter-1 === 0){
            setCounter(1);
        } else {
            setCounter(counter-1)
        }
    }

    const getFecha = () => {
        const fecha = new Date();
        const hoy = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear();

        const diaEntrega = hoy + 5;

        return diaEntrega + '/' + mes + '/' + anio
    }

    const getProductData = async () => {
        const docRef = doc(db, "products", productID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setArticleData(data);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const handleAddToCart = () => {
        
    }

    useEffect(() => {
        getProductData();
    }, [])

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        {
                            <img src={articleData.imageURL} 
                                className="card-img-top img-containerProduct" 
                                alt={articleData.name} />
                        }
                    </div>
                        {
                        <div className="col">
                            <div>
                                <h4 className="fw-bold my-3 pb-3">{articleData.name}</h4>
                                <h5 className="fw-bold my-3 pb-3">${articleData.sellingPrice}</h5>
                                <p className="font-weight-normal">{articleData.description}</p>
                                <p className="fw-bold">Marca:</p>
                                <p>{articleData.brand}</p>
                            </div>
                        
                        <div className="row w-25 mb-3">
                            <button className="col btn btn-secondary" onClick={handleSubstract}> - </button>
                            <span className="col input-group-text w-25 text-center">{counter}</span>
                            <span className="col btn btn-secondary" onClick={handleAdd}> + </span>
                        </div>
                        <p>{articleData.amount} disponible(s)</p>
                        <button className="btn btn-primary mb-3" onClick={handleAddToCart}>
                            Añadir al carrito
                        </button>
                        <p>Pídelo hoy y recibelo el {getFecha()}</p>
                        </div>
                        }
                </div>
            </div>
        </>
    );
}