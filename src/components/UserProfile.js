import React from 'react';
import Button from 'react-bootstrap/Button';
import History from './History.js';
import Profile from './auth/Profile.js';
import Container from 'react-bootstrap/Container';

// display image left of description for card
class UserProfile extends React.Component {
    render() {
        return (
            <>
            <Container className="historyContainer" >
                <Container className="profileContainer">
                <Profile />
                </Container>
                <Button className="historyButton" variant="outline-dark" onClick={this.props.deleteUser}>Delete User</Button>
                <Button className="historyButton" variant="outline-dark" onClick={this.props.displayHistory}>Display User History</Button>
            </Container>
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
