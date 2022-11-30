import React  from 'react';

import { ArticleForm } from "../components/ArticleForm";
import { TitleBarAdmin } from "../components/TitleBarAdmin";

export const ArticleAdminView = () => {
    return (
        <>
            <TitleBarAdmin />
            <div className="container px-4 py-5">
                <h2 className="pb2- border-bottom text-center">Administrador de artículos</h2>
            </div>
            {/* barra de busqueda de articulo */}
            <div className="container px-4 py-2 align-items-center">
                <div class="input-group w-100">
                    <input type="search" class="form-control rounded" placeholder="Nombre del artículo" aria-label="busqueda" />
                    <button type="button" class="btn btn-primary">Buscar articulo</button>
                </div>
            </div>
            {/* grupo de botones */}
            <div className="text-center my-5" role="group" aria-label="Grupo de botones">
                <a className="btn btn-primary mx-5">
                    Añadir producto
                </a>
                <a className="btn btn-primary mx-5">
                    Editar producto
                </a>
            </div>
            {/* furmularios */}
            <ArticleForm />
            {/* botón de salir */}
            <div className="text-center mb-2" role="group" aria-label="Grupo de botones">
                <a href="admin-view" className="btn btn-secondary mx-5">
                    Salir
                </a>
            </div>
        </>
    );
}