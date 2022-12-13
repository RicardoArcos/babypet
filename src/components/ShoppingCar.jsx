import React from 'react';

import work from '../images/working-dog.jpg'

export const ShoppingCar = () => {
    return (
        <div className="container px4- py-5">
            <h2 className="pb2- border-bottom">Carrito de compras</h2>
                <div className="row">
                    <div className="col">
                        <img 
                            className="card-img-top img-containerProduct"
                            src={work} alt='trabajando' />
                    </div>
                    <div className="col">
                    <h4 className="fw-bold my-3 pb-3">No se encuentra disponible pero seguimos trabajando para ofrecerte solo lo mejor.</h4>
                    </div>
                </div>
            </div>
    );
}