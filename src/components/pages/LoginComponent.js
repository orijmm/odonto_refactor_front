import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import usePostData from '../../redux/actions/AuthActions'
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
const LoginComponent = () =>  {
    const { LoginAction } = usePostData();
    const history = useNavigate();
    const dispatch = useDispatch();
    // const authResponse = useSelector(state=>state.userAuth.authResponse);
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
                            onChange={handleFieldChange}
                            placeholder="Enter email"
                            isInvalid={!fields.email}
                             />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control 
                            type="password" 
                            id="password"
                            value={fields.password}
                            onChange={handleFieldChange}
                            placeholder="Enter password"
                            isInvalid={!fields.password}
                            autoComplete="on"
                             />
                             <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
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
                                <br />
                                <div>
                                    <Button as={Link} to="/user/register" variant="secondary">Register Here</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
            </Col>
            </Row>
        </>
    )
}
export default LoginComponent