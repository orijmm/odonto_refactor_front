import React from 'react';
import { Navigate } from 'react-router-dom';
const Guard = ({ elementRoute, token }) => {
    return token !== null && token !== "" ?
        elementRoute
        :
        <Navigate to="/user/login" />

}

export default Guard;