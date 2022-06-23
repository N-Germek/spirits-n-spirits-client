import React from 'react';
import Card from 'react-bootstrap/Card';

// display image left of description for card
class Drink extends React.Component {
  render() {
    return (
      <>
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
          </Card>

          <Card style={{ width: '500px'}}>
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

export default Drink;
