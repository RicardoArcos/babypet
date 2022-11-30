import React  from 'react';

import { FootBar } from "../components/FootBar";
import { Login } from "../components/Login";
import { TitleBar } from "../components/TitleBar";

export const LoginView = () => {
    return (
        <>
            <TitleBar />
            <Login />
            <FootBar />
        </>
    );
}