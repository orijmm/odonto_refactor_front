import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/pages/ProfileComponent';
export default function PrivateRoute(props) {
    return (
        <div>
            {/*<Header/>*/}
            <Routes>
                <Route exact path={`${props.match.path}/view-profile`} element={Profile} />
                <Route exact path={props.match.path} render={props => (
                    <Navigate to={{ pathname: `${props.match.path}/view-profile` }} />
                )} />
            </Routes>
        </div>
    );
}