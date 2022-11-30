import React  from 'react';
import { Link } from 'react-router-dom';

import { TitleBarAdmin } from "../components/TitleBarAdmin";
import "../styles/form-login.css"

export const SalesReportView = () => {
    return (
        <>
            <TitleBarAdmin />
            <div className="container px-4 py-5">
                <h2 className="pb2- border-bottom text-center">Generar reporte de venta</h2>
                <p className="text-center my-3" >Introduzca las fechas para generar el reporte de venta.</p>
            </div>
            <form className="form-inline row mx-auto px-5" id="div-form">
                <div class="form-group col">
                    <label for="email">Del:</label>
                    <input type="date" class="form-control" />
                </div>
                <div class="form-group col">
                    <label for="password">Al:</label>
                    <input type="date" class="form-control" />
                </div>
                <div class="form-group col pt-4">
                    <button type="submit" className="btn btn-primary">Generar</button>
                </div>
            </form>
            <div className="text-center my-5" role="group" aria-label="Grupo de botones">
                <Link to={"/admin-view"} className="btn btn-secondary mx-5">
                    Salir
                </Link>
            </div>
        </>
    );
}