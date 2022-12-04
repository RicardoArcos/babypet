import React, { useContext, useEffect }  from 'react';
import { Context } from '../context/context';

import { db } from '../firebase/firebase-config';
import { collection, getDocs } from "firebase/firestore";

export const AllCategories = () => {

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
        <div className="container px4- py-5">
            <h2 className="pb2- border-bottom">Todas nuestras categorias</h2>
            <div className="row" role="group" aria-label="Grupo de botones">
                {
                    context.state.categories.map(item =>
                        // <li>{item}</li>
                        <div className="col-sm-4 m-2">
                            <a className="btn btn-info mx-5">{item}</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}