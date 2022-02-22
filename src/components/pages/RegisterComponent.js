import React, { useState } from "react";
// import { Button, TextField, Card } from "@mui/material";
import { Button, Col, Form, Row } from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import usePostData from '../../redux/actions/AuthActions';

const RegisterComponent = () => {
    const dispatch = useDispatch();
    const { RegisterAction } = usePostData();
    const [fields, setState] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id]: e.target.value
        })
    }
    const UserRegister = (e) => {
        e.preventDefault();
        console.log(fields);
        const passwordMatch = checkPasswordMatch(fields.password, fields.password_confirmation);
        if (passwordMatch === true) {
            alert('passwords dont match. please check your password again');
            return;
        }
        dispatch(RegisterAction(fields));
    };
    const checkPasswordMatch = (password, password_confirmation) => {
        return password !== password_confirmation ? true : false;
    }
    return (
        <>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>
                        <b>Welcome to Register User Page</b>
                    </h2>
                    <Form onSubmit={UserRegister}>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="text"
                                id="name"
                                value={fields.name}
                                onChange={handleFieldChange}
                                placeholder="Enter name"
                                isInvalid={!fields.name} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="email"
                                id="email"
                                value={fields.email}
                                onChange={handleFieldChange}
                                placeholder="Enter email"
                                isInvalid={!fields.email} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="password"
                                id="password"
                                value={fields.password}
                                onChange={handleFieldChange}
                                placeholder="Enter password"
                                isInvalid={!fields.password}
                                autoComplete="on" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="password"
                                id="password_confirmation"
                                value={fields.password_confirmation}
                                onChange={handleFieldChange}
                                placeholder="Confirm password"
                                isInvalid={!fields.password_confirmation}
                                autoComplete="on" />
                            <Form.Control.Feedback type="invalid">
                                Please confirm password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div>
                            <div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                ><AccountCircleIcon />
                                    <b>Register</b>
                                </Button>
                                <br />
                                <br />
                                <div>
                                    <Button as={Link} to="/user/login" variant="secondary">Login Here</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
export default RegisterComponent;