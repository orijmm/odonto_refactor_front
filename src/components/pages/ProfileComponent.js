import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LoadProfileAction } from '../../redux/actions/ProfileActions';
const ProfileComponent = () => {
    const dispatch = useDispatch();
    const profileResponse = useSelector(state => state.userDetails.userProfile);
    useEffect(() => {
        dispatch(LoadProfileAction());
        return () => {
        };
    }, [dispatch]);
    return (
        <div>
            <Card>
                {
                    profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?
                        <div>
                            <ListGroup>
                                <ListGroup.Item action variant="secondary"><h3>Profile: {profileResponse.data.name}</h3></ListGroup.Item>
                                <ListGroup.Item><strong>Name: {profileResponse.data.name}</strong></ListGroup.Item>
                                <ListGroup.Item><strong>email: {profileResponse.data.email}</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Creation Date: {profileResponse.data.created_at}</strong></ListGroup.Item>
                            </ListGroup>
                        </div>

                        :
                        <div>Unable to display profile</div>
                }
            </Card>
        </div>
    );
}

export default ProfileComponent;