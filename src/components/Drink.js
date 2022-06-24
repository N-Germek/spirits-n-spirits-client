import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

// display image left of description for card
class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientArray: [],
      measurementArray: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.draw !== this.props.draw) {
           this.loadText();
    }
}
  loadText = () => {
    console.log('component  mounting');
    console.log(this.props);
    if (this.props.draw) {
      this.setState({ ingredientArray: this.stringFilter('strIngredient'), measurementArray: this.stringFilter('strMeasure') });
    }
  }
  stringFilter = (string) => {
    let returnArray = [];
    let objects = Object.entries(this.props.draw.drinkChosen).filter(([key]) => key.includes(string)).filter(([key]) => this.props.draw.drinkChosen[key] != null);
    objects.forEach(obj => returnArray.push(obj[1]));
    console.log(returnArray, 'return array');
    return returnArray;
  }

  render() {
    return (
      <>
        {this.props.draw &&
          <>
            <CardGroup style={{ width: '60%' }}>
              <Card>
                <Card.Header as="h4" >
                  {`${this.props.draw.drinkChosen.strDrink}`}
                </Card.Header>
                <Card.Img variant="left" src={this.props.draw.drinkChosen.strDrinkThumb} alt={this.props.draw.drinkChosen.strDrink} />
              </Card>


              <Card>
                <Card.Header as="h4" >Ingredient List</Card.Header>
                <Card.Text>
                  <ListGroup>
                  {
                    this.state.ingredientArray.map((ingredient, index) => <ListGroup.Item key={index}>{this.state.measurementArray[index]} {ingredient}</ListGroup.Item> )
                  }
                  </ListGroup>
                </Card.Text>
              </Card>
              <Card>
                <Card.Header as="h4" >Instructions</Card.Header>
                <Card.Text>
                  {`${this.props.draw.drinkChosen.strInstructions}`}
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
