import React from 'react';
import Button from 'react-bootstrap/Button';
import Tarot from './Tarot.js';
import Drink from './Drink.js';
import Row from 'react-bootstrap/Row';
import { withAuth0 } from "@auth0/auth0-react";
import "../App.css"
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';


// display image left of description for card
class Spirit extends React.Component {


  render() {

    // const radios = [
    //   { name: 'Alcoholic', value: 'alcoholic' },
    //   { name: 'Non-Alcoholic', value: 'non-alcoholic' },
    // ];

    return (
      <>
      {this.props.auth0.isAuthenticated &&
      <>
      <Button className="spiritButton" variant="outline-dark" onClick={this.props.drinkPreference}>{this.props.drinkTarget}</Button>
      {/* <ButtonGroup

        }}>

        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-dark"}
            name="radio"
            value={radio.value}
            checked={radio.value}
            onChange={(e) => {
          this.props.drinkPreference(e.currentTarget.value);
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
      <Button className="spiritButton" variant="outline-dark" onClick={this.props.dailyReading}>Draw Card</Button>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Tarot draw={this.props.draw} />
      </Row>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Drink draw={this.props.draw} />
      </Row>
      </>
      }
      </>

    );
  }
}

export default withAuth0(Spirit);
