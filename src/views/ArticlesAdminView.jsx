// vista principal de articulo admin con las tarjetas de los artículos
import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TitleBarAdmin } from '../components/TitleBarAdmin';
import { db } from '../firebase/firebase-config';

export const ArticlesAdminView = () => {

    const [articles, setArticles] = useState([]);

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
        <>
            <TitleBarAdmin />
            {/* barra de busqueda de articulo */}
            <div className="container px-4 py-2 my-4 align-items-center">
                <form class="input-group w-100">
                    <input type="search"
                        class="form-control rounded"
                        placeholder="Nombre del artículo a editar o consultar"
                        aria-label="busqueda" />
                    <button type="button"
                        class="btn btn-primary">
                        Buscar articulo
                    </button>
                </form>
            </div>
            {/* botón para añadir productos */}
            <div className="text-center my-4" role="group" aria-label="Grupo de botones">
                <Link to={"/add-article"} className="btn btn-primary mx-5">
                    Añadir artículos
                </Link>
            </div>
            {/* container de las cartas de los productos */}
            <div className="container">
                <div className="d-flex flex-wrap">
                    {
                        articles.length > 0 && articles.map((article, i) => (
                            <div className="card m-3 shadow card-container" key={i}>
                                <img src={article.imageURL} className="card-img-top img-container" alt={article.name} />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{article.name}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <div className="text-end">
                                        <Link to={"/edit-article/" + article.id}>
                                            <button className="btn btn-primary">Editar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* botón de salir */}
            <div className="text-center my-4" role="group" aria-label="Grupo de botones">
                <Link to={"/admin-view"} className="btn btn-secondary mx-5">
                    Salir
                </Link>
            </div>
        </>
    )
}
