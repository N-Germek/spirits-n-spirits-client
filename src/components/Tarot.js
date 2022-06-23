import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// display image left of description for card
class Tarot extends React.Component {
  render() {
    return (
      <>
        {this.props.draw &&
          <>
            <CardGroup style={{ width: '60%' }}>
              <Card >
                <Card.Img variant="left" src={this.props.draw.tarotToday.image_url.src} alt={this.props.draw.tarotToday.name} />
                <Card.Text>
                  <a href={this.props.draw.tarotToday.image_url.page}>{this.props.draw.tarotToday.image_url.attribution}</a>
                </Card.Text>
              </Card>

              <Card>
                <Card.Title>
                  {`${this.props.draw.tarotToday.name}`}
                </Card.Title>
                <Card.Text>
                  {`${this.props.draw.tarotToday.desc}`}
                </Card.Text>
              </Card>
            </CardGroup>
          </>
        }
      </>
    );
  }
}

export default Tarot;
