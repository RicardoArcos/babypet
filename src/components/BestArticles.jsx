import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export const BestArticles = () => {

    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("");

    const retrieveData = async () => {
        let list = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc);
            list.push({
                ...doc.data(),
                id: doc.id
            });
            setArticles(list);
        });
    }

    useEffect(() => {
        retrieveData();
    }, [])

    return (
        <div className="container px4- py-5">
            <h2 className="pb2- border-bottom">Nuestros productos</h2>
            {/* barra de busqueda de articulo */}
            <div className="container px-4 py-2 my-4 align-items-center">
                <form class="input-group w-100">
                    <input type="search"
                        class="form-control rounded"
                        placeholder="Nombre del artículo a consultar"
                        aria-label="busqueda"
                        onChange={(e) => setQuery(e.target.value)} />
                </form>
            </div>
            <div className="d-flex flex-wrap">
                {
                    articles.filter(article => article.name.toLowerCase().includes(query))
                        .map((article, i) => (
                        <div className="card m-3 shadow card-container" key={i}>
                            <img src={article.imageURL} className="card-img-top img-container" alt={article.name} />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{article.name}</h5>
                                <p className="card-text">{article.description}</p>
                                <div className="text-end">
                                    <Link to={"/article/" + article.id} >
                                        <button className="btn btn-primary">Ir a</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
} 