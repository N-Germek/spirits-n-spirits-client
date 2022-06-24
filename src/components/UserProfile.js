import React from 'react';
import Button from 'react-bootstrap/Button';
import History from './History.js';
import Profile from './auth/Profile.js';

// display image left of description for card
class UserProfile extends React.Component {
    render() {
        return (
            <>
                <Profile />
                <Button variant="outline-dark" onClick={this.props.deleteUser}>Delete User</Button>
                <Button variant="outline-dark" onClick={this.props.displayHistory}>Display User History</Button>
                {this.props.history &&
                    (this.props.history.map(day => (
                        <History
                            timestamp={this.props.convertTimestamp(day.timestamp)}
                            tarotName={day.tarotName}
                            drinkName={day.drinkName}
                        />
                    )))
                }
            </>

        );
    }
}

export default UserProfile;
