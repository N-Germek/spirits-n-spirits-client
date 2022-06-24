import React from 'react';
import Button from 'react-bootstrap/Button';
import Tarot from './Tarot.js';
import Drink from './Drink.js';
import Row from 'react-bootstrap/Row';


// display image left of description for card
class Spirit extends React.Component {
  render() {
    return (
      <>
      <Button onClick={this.props.drinkPreference}>{this.props.drinkTarget}</Button>
      <Button onClick={this.props.dailyReading}>Draw Card</Button>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Tarot draw={this.props.draw} />
      </Row>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Drink draw={this.props.draw} />
      </Row>
      </>
    );
  }
}

export default Spirit;
