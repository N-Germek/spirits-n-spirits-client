import React from 'react';
import Button from 'react-bootstrap/Button';
import Tarot from './Tarot.js';
import Drink from './Drink.js';
import Row from 'react-bootstrap/Row';
import { withAuth0 } from "@auth0/auth0-react";
import "../App.css"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// display image left of description for card
class Spirit extends React.Component {


  render() {

    return (
      <>
        {this.props.auth0.isAuthenticated ?
          <>
            <Container className="centerButtons" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} >
              <Button className="spiritButton" variant="outline-dark" onClick={this.props.drinkPreference}>{this.props.drinkTarget}</Button>
              <Button className="spiritButton" variant="outline-dark" onClick={this.props.dailyReading}>Draw Card</Button>
            </Container>
            <Row xs={1} sm={2} md={3} lg={4} className="tarotRow" >
              <Tarot draw={this.props.draw} />
            </Row>
            <Row xs={1} sm={2} md={3} lg={4} className="drinkRow" >
              <Drink draw={this.props.draw} />
            </Row>
          </>
          :
          <>
          <h2>New to Spirits & Spirits?</h2>
          <p>Spirits & Spirits gives you a daily tarot reading with matching drink recommendation. It's a vibe.</p>
          <p>Login on the right to begin.</p>
          </>
          // <Card>
          //   <Card.Header as="h3">
          //     New to Spirits & Spirits?
          //     </Card.Header>
          //     <Card.Text>Spirits & Spirits gives you a daily tarot reading with matching drink recommendation. It's a vibe.</Card.Text>
          //     <Card.Footer>Login on the top right to begin</Card.Footer>
          // </Card>
        }
      </>

    );
  }
}

export default withAuth0(Spirit);
