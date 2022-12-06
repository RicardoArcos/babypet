import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from './context/context';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { HomePage } from './views/HomePage';
import { CategoriesView } from './views/CategoriesView';
import { AboutUs } from './views/AboutUs';
import { ShoppingCarView } from './views/ShoppingCarView'
import { LoginView } from './views/LoginView';
import { SingInView } from './views/SingInView';
import { ForgotPasswordView } from './views/ForgotPasswordView';
import { SearchResultsView } from './views/SearchResultsView';
import { ArticleView } from './views/ArticleView';
import { AccountView } from './views/AccountView';
import { PaymentsView } from './views/PaymentsView';
import { TransactionCorrectView } from './views/TransactionCorrectView';
import { AdminView } from './views/AdminView';
import { ArticleAdminView } from './views/ArticleAdminView';
import { SalesReportView } from './views/SalesReportView';
import { UserRouter } from './components/routers/UserRouter';
import { GuestRouter } from './components/routers/GuestRouter';
import { ArticlesAdminView } from './views/ArticlesAdminView';


export default function AppRouter() {

    const context = useContext(Context);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                context.setState({
                    ...context.state,
                    user
                })
                // ...
            } else {
                // User is signed out
                // ...
                context.setState({
                    ...context.state,
                    user: null
                })
            }
        });
    }, [context.state.user])

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <HomePage />}
                />
                <Route path="categorias" element={
                    <CategoriesView />}
                />
                <Route path="about-us" element={
                    <AboutUs />}
                />
                <Route path="shopping-car" element={
                    <UserRouter>
                        <ShoppingCarView />
                    </UserRouter>}
                />
                <Route path="login" element={
                    <GuestRouter>
                        <LoginView />
                    </GuestRouter>}
                />
                <Route path="sing-in" element={
                    <GuestRouter>
                        <SingInView />
                    </GuestRouter>}
                />
                <Route path="forgot-password" element={
                    <ForgotPasswordView />}
                />
                <Route path="search-results" element={
                    <SearchResultsView />}
                />
                <Route path="article" element={
                    <ArticleView />}
                />
                <Route path="account" element={
                    <UserRouter>
                        <AccountView />
                    </UserRouter>
                }
                />
                <Route path="payment" element={
                    <UserRouter>
                        <PaymentsView />
                    </UserRouter>}
                />
                <Route path="transaction-correct" element={
                    <UserRouter>
                        <TransactionCorrectView />
                    </UserRouter>}
                />
                <Route path="admin-view" element={
                    <AdminView />}
                />
                <Route path="si" element={
                    <ArticleAdminView />}
                />
                <Route path="sales-report" element={
                    <SalesReportView />}
                />
                <Route path="admin-articles" element={
                    <ArticlesAdminView />
                } />
            </Routes>
        </Router>
    )
}