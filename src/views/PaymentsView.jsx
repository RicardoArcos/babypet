import React  from 'react';

import { FootBar } from "../components/FootBar";
import { Payment } from "../components/Payment";
import { TitleBar } from "../components/TitleBar";

export const PaymentsView = () => {
    return (
        <>
            <TitleBar />
            <Payment />
            <FootBar />
        </>
    );
}