import React, { useContext, useEffect } from 'react';
import { Context } from '../context/context';

import { db } from '../firebase/firebase-config';
import { collection, getDocs } from "firebase/firestore";

export const Categories = () => {

    const context = useContext(Context);

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
        <div className="container px-4 py-5">
            <h2 className="pb2- border-bottom">Categorias</h2>
            <div className="row" role="group" aria-label="Grupo de botones">
                {
                    context.state.categories.map(item =>
                        // <li>{item}</li>
                        <div className="col card w-75 m-2" role="group" aria-label="Grupo de botones">
                            <div className="card-body text-center">
                                <h5 className="card-title">{item}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}