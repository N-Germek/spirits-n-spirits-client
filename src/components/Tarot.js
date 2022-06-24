import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css";

// display image left of description for card
class Tarot extends React.Component {
  render() {
    return (
      <>
        {this.props.draw &&
          <>
            <CardGroup style={{ width: '60%' }} className="groupCenter">
              <Card className="tarotCards" >
                <Card.Img variant="left" src={this.props.draw.tarotToday.image_url.src} alt={this.props.draw.tarotToday.name} />
                <Card.Text>
                  <a href={this.props.draw.tarotToday.image_url.page}>{this.props.draw.tarotToday.image_url.attribution}</a>
                </Card.Text>
              </Card>

              <Card className="tarotCards" >
                <Card.Header as="h3" className="text-center">
                  {`${this.props.draw.tarotToday.name}`}
                </Card.Header>
                <Card.Text>
                  {`${this.props.draw.tarotToday.desc}`}
                </Card.Text>
                <Card.Text>
                  {`Upright meanings: ${this.props.draw.tarotToday.meaning_up}`}
                </Card.Text>
                <Card.Text>
                  {`Reversed meanings: ${this.props.draw.tarotToday.meaning_rev}`}
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
