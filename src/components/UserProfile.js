import React from 'react';
import Button from 'react-bootstrap/Button';

// display image left of description for card
class UserProfile extends React.Component {
    render() {
    return (
        <>
        <Button onClick={this.props.deleteUser}>Delete User</Button>
        <Button onClick={this.props.displayHistory}>Display User History</Button>
        </>
        );
    }
}

export default UserProfile;