import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

// display image left of description for card
class History extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Card>
          <Card.Title>
              Date: {this.props.timestamp}
            </Card.Title>
            <Card.Text>
              Tarot Card Drawn: {this.props.tarotName}
            </Card.Text>
            <Card.Text>
              Drink Chosen: {this.props.drinkName}
            </Card.Text>
          </Card>
        </Container>
      </>
    );
  }
}

export default History;
