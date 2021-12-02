import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
const HomeComponent = () => {
    const history = useNavigate();
    const gotToDashboard = (e, url) => {
        history(url);
    }
    return (
        <>
                <Container>
                    <Button variant="primary" onClick={e => gotToDashboard(e, '/user')}
                    >User Dashboard
                    </Button>
                </Container>
        </>
    )
}
export default HomeComponent