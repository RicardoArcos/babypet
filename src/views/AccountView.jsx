import React  from 'react';

import { Account } from "../components/Account";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const AccountView = () => {
    return (
        <>
            <TitleBar />
            <Account />
            <FootBar />
        </>
    );
}