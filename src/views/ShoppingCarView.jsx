import React  from 'react';

import { ShoppingCar } from "../components/ShoppingCar";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const ShoppingCarView = () => {
    return (
        <div className="shopping-cart">
            <TitleBar />
            <ShoppingCar />
            <FootBar />
        </div>
    )
}