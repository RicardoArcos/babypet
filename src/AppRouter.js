import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { CategoriesView } from './views/CategoriesView';
import { AboutUs } from './views/AboutUs';
import { ShoppingCarView } from './views/ShoppingCarView'
import { LoginView } from './views/LoginView';
import { SingInView } from './views/SingInView';
import { ForgotPasswordView } from './views/ForgotPasswordView';
import { SearchResultsView } from './views/SearchResultsView';

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
                <Route path="shopping-car" element={
                    <ShoppingCarView />}
                />
                <Route path="login" element={
                    <LoginView />}
                />
                <Route path="sing-in" element={
                    <SingInView />}
                />
                <Route path="forgot-password" element={
                    <ForgotPasswordView />}
                />
                <Route path="search-results" element={
                    <SearchResultsView />}
                />
            </Routes>
        </Router>
    )
}