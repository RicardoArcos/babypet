// Vista de administrador de articulos
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArticleForm } from "../components/ArticleForm";
import { EditArticleForm } from '../components/EditArticleForm';
import { TitleBarAdmin } from "../components/TitleBarAdmin";

export const ArticleAdminView = () => {

    const [busqueda, setBusqueda] = useState(false);

    const [form, setForm] = useState({
        nombreProducto: ''
    })

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <TitleBarAdmin />
            <div className="container px-4 py-5">
                <h2 className="pb2- border-bottom text-center">Administrador de artículos</h2>
            </div>
            {/* barra de busqueda de articulo */}
            <div className="container px-4 py-2 align-items-center">
                <form class="input-group w-100">
                    <input type="search" 
                        class="form-control rounded" 
                        placeholder="Nombre del artículo a editar o consultar" 
                        aria-label="busqueda" 
                        onChange={handleInputChange} />
                    <button type="button" 
                        class="btn btn-primary" 
                        onClick={() => setBusqueda(true)}>
                            Buscar articulo
                    </button>
                </form>
            </div>
            {/* grupo de botones */}
            <div className="text-center my-3" role="group" aria-label="Grupo de botones">
                <a className="btn btn-primary mx-5" onClick={() => setBusqueda(false)}>
                    Añadir producto
                </a>
            </div>
            {/* furmularios */}
            {
                busqueda ? (
                    <EditArticleForm />
                ) :
                (
                    <ArticleForm />
                )
            }
            {/* botón de salir */}
            <div className="text-center mb-2" role="group" aria-label="Grupo de botones">
                <Link to={"/admin-view"} className="btn btn-secondary mx-5">
                    Salir
                </Link>
            </div>
        </>
    );
}