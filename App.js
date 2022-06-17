import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Spirit from './components/Spirit';
import Container from 'react-bootstrap/Container';
import Profile from './components/auth/Profile';
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<Container>
				<Router>
					<Header />
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route exact path="/" element={<Spirit />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Router>
			</Container>
		);
	}
}
//requestbody should include the new tarot and drink objects as tarotObject and drinkObject
//client needs to getUser on load and store user _id in state for later calls
export default withAuth0(App);
