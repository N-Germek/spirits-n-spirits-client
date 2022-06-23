import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Spirit from './components/Spirit';
import Container from 'react-bootstrap/Container';
import Profile from './components/auth/Profile.js';
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './components/UserProfile';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			draw: false,
			error: '',
			drinkTarget: 'alcoholic',
			history: {}
		}
	}

	// handleUserCreate = async () => {
	// 	if (this.props.auth0.isAuthenticated) {
	// 		const res = await this.props.auth0.getIdTokenClaims();
	// 		const jwt = res.__raw;
	// 	}
	// }

	//TODO: finish all code including handleUserCreate.
	dailyReading = async () => { // This needs to check server if it has the current user and if so, if/what they have cached. If there is no user,
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				const config = {
					headers: { "Authorization": `Bearer ${jwt}` },
					method: 'get',
					baseURL: process.env.REACT_APP_SERVER,
					url: '/draw',
					params: {drinkTarget: this.state.drinkTarget}
				}

				console.log(config);
				const response = await axios(config);
				console.log('Axios: ', response.data);
				console.log(response);
				this.setState({ draw: response.data })
			}
		} catch (error) {
			this.errorHandler(error);
		}
	}

	drinkPreference = () => {
		if (this.state.drinkTarget === 'alcoholic') {
			this.setState({ drinkTarget: 'non-alcoholic' });
		} else {
			this.setState({ drinkTarget: 'alcoholic' });
		}
	}

	errorHandler = (error) => {
		console.error(error);
		this.setState({ error: `Status Code: ${error.response.status} ${error.response.data.error}` })
	}

	deleteUser = async () => { 
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				const config = {
					headers: { "Authorization": `Bearer ${jwt}` },
					method: 'delete',
					baseURL: process.env.REACT_APP_SERVER,
					url: '/delete',
				}

				console.log(config);
				const response = await axios(config);
				console.log(response);
			}
		} catch (error) {
			this.errorHandler(error);
		}
	}

	displayHistory = async () => {
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				const config = {
					headers: { "Authorization": `Bearer ${jwt}` },
					method: 'get',
					baseURL: process.env.REACT_APP_SERVER,
					url: '/history',
				}

				console.log(config);
				const response = await axios(config);
				console.log('Axios: ', response.data);
				console.log(response);
				this.setState({ history: response.data.history })
			}
		} catch (error) {
			this.errorHandler(error);
		}
	}


	render() {
		return (
			<Container>
				<Router>
					<Header />
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route exact path="/" element={<Spirit dailyReading={this.dailyReading} draw={this.state.draw} drinkPreference={this.drinkPreference} drinkTarget={this.state.drinkTarget} displayHistory={this.displayHistory} deleteUser={this.deleteUser} />} />
						<Route path="/about" element={<About />} />
						<Route path="/UserProfile" element={<UserProfile deleteUser={this.deleteUser} displayHistory={this.displayHistory} history={this.state.history}/>} />
					</Routes>
				</Router>
			</Container>
		);
	}
}
//requestbody should include the new tarot and drink objects as tarotObject and drinkObject
//client needs to getUser on load and store user _id in state for later calls
export default withAuth0(App);
