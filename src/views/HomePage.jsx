import React  from 'react';

import { BestArticles } from "../components/BestArticles";
import { Categories } from "../components/Categories";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const HomePage = () => {
    return (
        
        <div className="home-page">
            <div className="header">
                <TitleBar />
            </div>
            <div className="articles">
                <BestArticles />
            </div>
            <div className="categories">
                <Categories />
            </div>
            <FootBar />
        </div>
    );
}
