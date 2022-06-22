import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

// display image left of description for card
class Spirit extends React.Component {
  render() {
    return (
      <>
      <Button onClick={this.props.drinkPreference}>{this.props.drinkTarget}</Button>
      <Button onClick={this.props.dailyReading}>Draw Card</Button>
      {this.props.draw && 
          <>
          <Card style={{ width: '500px'}}>
            <Card.Img variant="left" src={this.props.draw.drawnCard.image_url.src} alt={this.props.draw.drawnCard.name} />
          <Card.Text>
            <a href={this.props.draw.drawnCard.image_url.page}>{this.props.draw.drawnCard.image_url.attribution}</a>
            </Card.Text>
            <Card.Text>
          {`${this.props.draw.drawnCard.name}`}
          </Card.Text>
          <Card.Text>
          {`${this.props.draw.drawnCard.desc}`}
          </Card.Text>
          </Card>
          </>



          
      }
      </>
    );
  }
}

export default Spirit;
