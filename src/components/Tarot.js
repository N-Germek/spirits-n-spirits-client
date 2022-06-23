import React from 'react';
import Card from 'react-bootstrap/Card';

// display image left of description for card
class Tarot extends React.Component {
  render() {
    return (
      <>
      {this.props.draw &&
          <>
          <Card style={{ width: '500px'}}>
            <Card.Img variant="left" src={this.props.draw.tarotToday.image_url.src} alt={this.props.draw.tarotToday.name} />
          <Card.Text>
            <a href={this.props.draw.tarotToday.image_url.page}>{this.props.draw.tarotToday.image_url.attribution}</a>
            </Card.Text>
            <Card.Text>
          {`${this.props.draw.tarotToday.name}`}
          </Card.Text>
          </Card>

          <Card style={{ width: '500px'}}>
          <Card.Text>
          {`${this.props.draw.tarotToday.desc}`}
          </Card.Text>
          </Card>
          </>
      }
      </>
    );
  }
}

export default Tarot;
