import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { CategoriesView } from './views/CategoriesView';
import { AboutUs } from './views/AboutUs';

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" element= {
                    <HomePage />}
                />
                <Route path="categorias" element={
                    <CategoriesView />}
                />
                <Route path="about-us" element={
                    <AboutUs />}
                />
            </Routes>
        </Router>
    )
}