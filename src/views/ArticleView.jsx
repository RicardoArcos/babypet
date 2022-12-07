import React  from 'react';
import { useParams } from 'react-router-dom';

import { Article } from "../components/Article";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const ArticleView = () => {
    const { id } = useParams();

    return (
        <>
            <TitleBar />
            <Article productID={id}/>
            <FootBar />
        </>
    );
}