import React from 'react';
import Button from 'react-bootstrap/Button';
import Tarot from './Tarot.js';
import Drink from './Drink.js';


// display image left of description for card
class Spirit extends React.Component {
  render() {
    return (
      <>
      <Button onClick={this.props.drinkPreference}>{this.props.drinkTarget}</Button>
      <Button onClick={this.props.dailyReading}>Draw Card</Button>
      <Tarot draw={this.props.draw} />
      <Drink draw={this.props.draw} />

      </>
    );
  }
}

export default Spirit;
