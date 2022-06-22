import React from 'react';
import Button from 'react-bootstrap/Button';

class Spirit extends React.Component {
  render() {
    return (
      <>
      <Button onClick={this.props.drinkPreference}>{this.props.drinkTarget}</Button>
      <Button onClick={this.props.dailyReading}>Draw Card</Button>



      </>
    );
  }
}

export default Spirit;
