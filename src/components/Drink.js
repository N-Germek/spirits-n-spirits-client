import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// display image left of description for card
class Drink extends React.Component {
  render() {
    return (
      <>
        {this.props.draw &&
          <>
            <CardGroup style={{ width: '60%' }}>
              <Card>
                <Card.Img variant="left" src={this.props.draw.drinkChosen.strDrinkThumb} alt={this.props.draw.drinkChosen.strDrink} />
              </Card>

              <Card>
                <Card.Title>
                  {`${this.props.draw.drinkChosen.strDrink}`}
                </Card.Title>
                <Card.Text>
                  {`${this.props.draw.drinkChosen.strInstructions}`}
                </Card.Text>
              </Card>

              <Card>
                <Card.Text>
                  Instructions: {`${this.props.draw.drinkChosen.strInstructions}`}
                </Card.Text>
              </Card>
            </CardGroup>
          </>
        }
      </>
    );
  }
}

export default Drink;
