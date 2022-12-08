import React  from 'react';

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase-config';

export const SearchRestults = ({ productName }) => {

    const searchName = productName.toLowerCase();

    const searchProducts = async () => {
        const q = query(collection(db, "products"), where("name", "==", searchName));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }

    return (
        <>        
            <div className="container px4- py-5">
                <h2 className="pb2- border-bottom">Resultados de busqueda</h2>
            </div>
        </>
    );
}