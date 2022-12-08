import React, { useState } from 'react'

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase-config';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ArticleCategory = ({ i }) => {

    const [articles, setArticles] = useState([]);

    const getCategoriesArticles = async () => {
        let list = [];
        const q = query(collection(db, "products"), where("category", "==", i + ""));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            list.push({
                ...doc.data(),
                id: doc.id
            });
            setArticles(list);
        });
    }

    useEffect(() => {
        getCategoriesArticles();
    }, [])

    return (
        <>
            <div className="d-flex flex-wrap">
                {
                    articles
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
        </>
    )
}
