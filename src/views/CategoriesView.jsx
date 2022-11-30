import React  from 'react';

import { AllCategories } from "../components/AllCategories";
import { FootBar } from "../components/FootBar";
import { TitleBar } from "../components/TitleBar";

export const CategoriesView = () => {
    return (
        <div className="categories-view">
            <TitleBar />
            <AllCategories />
            <FootBar />
        </div>
    );
}