import React, { useEffect } from 'react';
import { LogoutAction } from '../../redux/actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
    const register = () => {
        navigate("/user/register");
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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" > Home</Nav.Link>
                            {
                                token !== null && token !== "" ?
                                    <Nav.Link as={Link} to="/user/view-profile" > Profile</Nav.Link> :
                                    ''
                            }
                            {
                                token !== null && token !== "" ?

                                    <Navbar.Text>
                                        <a href="#" onClick={logOut}>Logout</a>
                                    </Navbar.Text> :
                                    <NavDropdown title="Acount" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={login}>login</NavDropdown.Item>
                                <NavDropdown.Item onClick={register}>Register</NavDropdown.Item>
                            </NavDropdown>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}