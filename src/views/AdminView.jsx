import { TitleBarAdmin } from "../components/TitleBarAdmin";

export const AdminView = () => {
    return (
        <>
            <TitleBarAdmin />
            <div className="container px4- py-5">
                <h2 className="pb2- border-bottom text-center">Bienvenido Administrador</h2>
            </div>
            {/* Contenedor de los botones */}
            <div className="text-center my-5" role="group" aria-label="Grupo de botones">
                <button type="button" className="btn btn-primary mx-5">Productos</button>
                <button type="button" className="btn btn-primary mx-5">Reporte de inventario</button>
                <button type="button" className="btn btn-primary mx-5">Reporte de venta</button>
            </div>
            {/* Contenedor del botón salir */}
            <div className="text-center my-5" aria-label="Botón de salir">
                <button type="button" className="btn btn-secondary mx-5">Salir</button>
            </div>
        </>
    );
}