import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/pages/HomeComponent";
import Login from "./components/pages/LoginComponent";
import Register from "./components/pages/RegisterComponent";
// import PrivateRoute from './PrivateRoute';
import Guard from './Guard';
import Header from './components/layouts/Header';
import Profile from './components/pages/ProfileComponent';
function RoutesDashboard() {
    const token = localStorage.getItem('user-token');
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" 
                />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/user/login" element={<Login />} />
                <Route exact path="/user/register" element={<Register />} />
                <Route exact path="/user/view-profile" element={
                <Guard elementRoute="/user/view-profile" token={token}/>
                } /> 
            </Routes>
        </>
    );
}
export default RoutesDashboard;