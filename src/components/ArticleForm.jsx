import React  from 'react';

export const ArticleForm = () => {
    return(
        <div className="container py-3 h-100" id="div-form">
            <form>
                {/* campo nombre del producto */}
                <div className="form-outline mb-4 w-100 ">
                    <label className="form-label" for="form2Example1">Nombre del producto:</label>
                    <input type="text" id="form2Example1" className="form-control " placeholder="Juguete entrenador" />
                </div>
                {/* campo de la marca */}
                <div className="form-outline mb-4 w-100 ">
                    <label className="form-label" for="form2Example1">Marca del producto:</label>
                    <input type="text" id="form2Example1" className="form-control " placeholder="Marca S.A. de C.V" />
                </div>
                {/* categoria */}
                <div className="form-outline mb-4 w-100 ">
                    <label className="form-label" for="form2Example1">Categoría:</label>
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Elija una categoria...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                {/* cantidad y disponibilidad */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" for="form2Example1">Disponibilidad:</label>
                    <input className="form-check-input mx-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                </div>
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" for="form2Example1">Cantidad:</label>
                    <input type="number" id="form2Example1" className="form-control w-25" />
                </div>
                {/* precio de compra */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" for="form2Example1">Precio de compra:</label>
                    <input type="number" inputmode="decimal" step=".01" className="form-control" placeholder="$123.45" />
                </div>
                {/* precio de venta*/}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" for="form2Example1">Precio de venta:</label>
                    <input type="number" inputmode="decimal" step=".01" className="form-control" placeholder="$123.45" />
                </div>
                {/* descripción */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" for="form2Example1">Descripción del artículo:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
                {/* imágenes */}
                <div className="form-outline mb-4 w-100">
                    <label className="form-label" for="form2Example1">Imágenes del artículo:</label>
                    <input type="file" class="form-control" id="inputGroupFile01"></input>
                </div>
                {/* botón */}
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4">Guardar</button>
                </div>
            </form>
        </div>
    );
}