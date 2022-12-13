import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from './context/context';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";

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
import { SalesReportView } from './views/SalesReportView';
import { UserRouter } from './components/routers/UserRouter';
import { GuestRouter } from './components/routers/GuestRouter';
import { ArticlesAdminView } from './views/ArticlesAdminView';
import { EditArticleView } from './views/EditArticleView';
import { AddArticleView } from './views/AddArticleView';
import { AdminRouter } from './components/routers/AdminRouter';
import { db } from './firebase/firebase-config';


export default function AppRouter() {

    const context = useContext(Context);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                const q = query(collection(db, "users"), where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
                context.setState({
                    ...context.state,
                    user: querySnapshot.docs[0].data()
                });
            }
        });
    }, [auth])


    /*if(context.state.user) {

        console.log(context.state.user);

        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }*/

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
                <Route path="search-results/:query" element={
                    <SearchResultsView />}
                />
                <Route path="article/:id" element={
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
                    <AdminRouter >
                        <AdminView />
                    </AdminRouter>}
                />
                <Route path="admin-articles" element={
                    <AdminRouter >
                        <ArticlesAdminView />
                    </AdminRouter>}
                />
                <Route path="add-article" element={
                    <AdminRouter>
                        <AddArticleView />
                    </AdminRouter>}
                />
                <Route path='edit-article/:id' element={
                    <AdminRouter >
                        <EditArticleView />
                    </AdminRouter>}
                />
                <Route path="sales-report" element={
                    <SalesReportView />}
                />
            </Routes>
        </Router>
    )
}