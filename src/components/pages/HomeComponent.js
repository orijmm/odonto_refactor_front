import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const HomeComponent = () => {
    const history = useNavigate();
    const gotToDashboard = (e, url) => {
        history(url);
    }
    return (
        <>
                <div>
                    <Button variant="contained" onClick={e => gotToDashboard(e, '/user')}
                        size="large" color="primary">User Dashboard
                    </Button>
                </div>
        </>
    )
}
export default HomeComponent