import React from 'react';
import { Navigate } from 'react-router-dom';
const Guard = ({ elementRoute, token }) => {

    return token !== null && token !== "" ?
        <Navigate to={elementRoute} />
        :
        <Navigate to="/user/login" />

}

export default Guard;