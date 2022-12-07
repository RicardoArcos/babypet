// Vista de administrador de articulos
import React from 'react';
import { Link } from 'react-router-dom';
import { AddArticleForm } from '../components/AddArticleForm';

import { TitleBarAdmin } from "../components/TitleBarAdmin";

export const AddArticleView = () => {

    return (
        <>
            <TitleBarAdmin />
            <div className="container px-4 py-5">
                <h2 className="pb2- border-bottom text-center">Añadir artículos</h2>
            </div>
            {/* furmularios */}
            <AddArticleForm />
            {/* botón de salir */}
            <div className="text-center mb-4" role="group" aria-label="Grupo de botones">
                <Link to={"/admin-view"} className="btn btn-secondary mx-5">
                    Salir al menú
                </Link>
                <Link to={"/admin-articles"} className="btn btn-secondary mx-5">
                    Volver a artículos
                </Link>
            </div>
        </>
    );
}