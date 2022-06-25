import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

// display image left of description for card
class History extends React.Component {
  render() {
    return (
      <>
        <Container className="historyCompContainer" >
          <Card className="historyCard" >
          <Card.Header className="historyHeader" >
              Date of reading: {this.props.timestamp}
            </Card.Header>
            <Card.Text className="historyText" >
              <h6>Tarot Card Drawn:</h6> {this.props.tarotName}
            </Card.Text>
            <Card.Text className="historyText">
              <h6>Selected Drink:</h6> {this.props.drinkName}
            </Card.Text>
          </Card>
        </Container>
      </>
    );
  }
}

export default History;
