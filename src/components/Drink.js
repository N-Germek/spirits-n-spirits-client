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
            <Card.Img variant="left" src={this.props.draw.drinkChosen.strDrinkThumb} alt={this.props.draw.drinkChosen.strDrink} />
            <Card.Text>
          {`${this.props.draw.drinkChosen.strDrink}`}
          </Card.Text>
          </Card>

          <Card style={{ width: '500px'}}>
          <Card.Text>
          {`${this.props.draw.drinkChosen.strInstructions}`}
          </Card.Text>
          </Card>

          <Card style={{ width: '500px'}}>
          <Card.Text>
          Instructions: {`${this.props.draw.drinkChosen.strInstructions}`}
          </Card.Text>
          </Card>
          </>
      }
      </>
    );
  }
}

export default Drink;
