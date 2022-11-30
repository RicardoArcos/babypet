import React  from 'react';
import { Link } from 'react-router-dom';

import { TitleBarAdmin } from "../components/TitleBarAdmin";

export const AdminView = () => {
    return (
        <>
            <TitleBarAdmin />
            <div className="container px-4 py-5">
                <h2 className="pb2- border-bottom text-center">Bienvenido Administrador</h2>
            </div>
            {/* Contenedor de los botones */}
            <div className="text-center my-5" role="group" aria-label="Grupo de botones">
                <Link to={"/admin-article"} className="btn btn-primary mx-5">
                    Productos
                </Link>
                <button type="button" className="btn btn-primary mx-5">
                    Reporte de inventario
                </button>
                <Link to={"/sales-report"} className="btn btn-primary mx-5">
                    Reporte de venta
                </Link>
            </div>
            {/* Contenedor del botón salir */}
            <div className="text-center my-5" aria-label="Botón de salir">
                <Link to={"/"} className="btn btn-secondary mx-5">Salir</Link>
            </div>
        </>
    );
}