import React, { useEffect } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography, Button } from '@mui/material';
import { LogoutAction } from '../../redux/actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export default function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authResponse = useSelector(state => state.userAuth.authResponse);
    const logOut = () => {
        dispatch(LogoutAction());
        navigate("/user/login");
    }
    const login = () => {
        navigate("/user/login");
    }
    const token = localStorage.getItem('user-token');
    useEffect(() => {
        if (authResponse !== "" && authResponse.success === true) {
            alert(authResponse.message);
            localStorage.removeItem('user-token');
        }
        return () => {
        };
    }, [authResponse])
    
    return (
        <div >
            <CssBaseline />
            <AppBar position="fixed" >
                <Toolbar>
                    <Typography variant="h6" noWrap >
                        <Link to="/home" > Home</Link>
                    </Typography>
                    <Typography variant="h6" noWrap >
                        Welcome to User Dashboard
                    </Typography>
                    {/* {
                        token !== null && token !== "" ?
                            <Link to="/user/view-profile" > Profile</Link> :
                            ''
                    } */}
                    <Typography variant="h6" noWrap >
                        <Link to="/user/view-profile" > Profile</Link>
                    </Typography>
                    
                    {
                        token !== null && token !== "" ?
                            <Button color="inherit" onClick={logOut}>Logout</Button> :
                            <Button color="inherit" onClick={login}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}