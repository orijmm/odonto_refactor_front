import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../redux/actions/AuthActions';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
const LoginComponent = () =>  {
    const history = useNavigate();
    //console.log(history);
    const dispatch = useDispatch();
    //const authResponse = 
    useSelector(state=>state.userAuth.authResponse);
    const [fields, setState] = useState({
        email: "",
        password: "",
    });
    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id]: e.target.value
        })
    }
    const UserLogin = (e) => {
        e.preventDefault();
        console.log(fields);
        dispatch(LoginAction(fields, history));
    };
    return (
        <>
            <Row className="justify-content-md-center">
            <Col md={6}>
                    <h2><b>Welcome to User Login Page</b></h2>
                    <Form onSubmit={UserLogin}>
                        <Form.Group className="mb-3">
                            <Form.Control 
                            type="email" 
                            id="email"
                            autoComplete="on"
                            required
                            value={fields.email}
                            onChange={handleFieldChange} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control 
                            type="password" 
                            id="password"
                            value={fields.password}
                            onChange={handleFieldChange}
                            placeholder="Enter password" />
                        </Form.Group>
                        <div>
                            <div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                ><AccountCircleIcon />
                                    <b>Login</b>
                                </Button>
                                <br />
                                <div>
                                    <Button as={Link} to="/user/register" variant="secondary">Register Here</Button>
                                </div>
                            </div>
                            <div>
                                <Button as={Link} to="/home">Back To Home Page </Button>
                            </div>
                        </div>
                    </Form>
            </Col>
            </Row>
        </>
    )
}
export default LoginComponent