import React, { createContext } from 'react';

export const Context = createContext();

export const initialState = {
    // user: {
    //     names: 'Unkown',
    //     lastName: '',
    //     email: 'no-email',
    //     phoneNumber: 'no-phone',
    //     password: '',
    //     role: 'guest'
    // },
    user: null,
    categories: []
}