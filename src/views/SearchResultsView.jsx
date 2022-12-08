import React  from 'react';
import { useParams } from 'react-router-dom';

import { FootBar } from '../components/FootBar';
import { SearchRestults } from '../components/SearchResults';
import { TitleBar } from '../components/TitleBar';

export const SearchResultsView = () => {

    const { query } = useParams();

    return (
        <>
            <TitleBar />
            <SearchRestults productName={query}/>
            <FootBar />
        </>
    );
}