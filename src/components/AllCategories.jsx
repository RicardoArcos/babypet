import React, { useContext, useEffect } from 'react';
import { Context } from '../context/context';

import { db } from '../firebase/firebase-config';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from 'react';
import { ArticleCategory } from './ArticleCategory';

export const AllCategories = () => {

    const context = useContext(Context);

    const [active, setActive] = useState(1);

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

    return (
        <div className="container px4- py-5">
            <h2 className="pb2- border-bottom">Todas nuestras categorias</h2>
            <div className="row" role="group" aria-label="Grupo de botones">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {
                        context.state.categories.map((item, i) =>
                            // <li>{item}</li>
                            <>
                                <li className="nav-item" role="presentation"  key={i}>
                                    <button className={i === active ? "nav-link active" : "nav-link"} id="home-tab" 
                                        data-bs-toggle="tab" data-bs-target={"#" + item + "-tab-pane"} 
                                        type="button" role="tab" aria-controls={item + "-tab-pane"} 
                                        aria-selected={i === active ? "true" : "false"} onClick={() => setActive(i)}>{item}</button>
                                </li>
                            
                            </>
                        )
                    }
                </ul>

                <div className="tab-content" id="myTabContent">
                    {
                        context.state.categories.map((item, i) =>
                        <div className={i === active ? "tab-pane fade show active" : "tab-pane fade"}  key={i}
                            id={item + "-tab-pane"} role="tabpanel" aria-labelledby={item + "-tab"} tabindex={i}>
                                <ArticleCategory i={i} />
                        {/* (
                            const q = query(collection(db, "products"), where("category", ==, {i}));
                            const querySnapshot = await getCategoriesArticles(q);
                            querySnapshot.forEach((doc) => {
                                console.log(doc.id, " => ", doc.data());
                            })
                        ) */}
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}