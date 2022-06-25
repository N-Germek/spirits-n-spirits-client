import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './auth/Logout';
import Profile from './auth/Profile';
import Login from './auth/Login';
import { withAuth0 } from '@auth0/auth0-react';
import "../App.css";

class Header extends React.Component {
	render() {
		return (
			<Navbar fixed="top" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand className="headerText" href="/">Home</Navbar.Brand>
					<Navbar.Brand className="headerText" href="about">About</Navbar.Brand>


						<Navbar.Brand className="brandName" >Spirits & Spirits</Navbar.Brand>


					{this.props.auth0.isAuthenticated ?
					<>
					<Navbar.Brand className="headerText" href="UserProfile">Profile</Navbar.Brand>
					{/* <Navbar.Text>
						<Profile />
					</Navbar.Text> */}
					<Navbar.Text className="headerText">
						<Logout />
					</Navbar.Text>
					</> :
					<Navbar.Text className="headerText">
						<Login />
					</Navbar.Text>
	}
				</Container>
			</Navbar>
			// <div id="fixed">
			// 	<Navbar activeKey="/Home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
			// 		<Nav.Item />
			// 		<Nav.Item>
			// 			<Nav.Link eventKey="/home">Home</Nav.Link>
			// 		</Nav.Item>
			// 		<Nav.Item>
			// 			<Nav.Link eventKey="/about">About</Nav.Link>
			// 		</Nav.Item>
			// 		<Nav.Item>
			// 			<Nav.Link eventKey="disabled" disabled>
			// 				Disabled
			// 			</Nav.Link>
			// 		</Nav.Item>
			// 	</Nav>
			// 	<Login />
			// 	<Logout />
			// 	<Profile />
			// </div>
		);
	}
}

export default withAuth0(Header);
