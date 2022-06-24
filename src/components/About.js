import React from 'react';
import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import natalija from '../img/natalija.jpeg';
import zayah from '../img/tigrProfile.png';

class About extends Component {
	render() {
		return (
			<>
			<h1>Meet the Developers</h1>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Natalija Germek</Accordion.Header>
					<Accordion.Body id="natalijaColors">
						<div className="photos">
							<img src={natalija} alt="" height={150} />
						</div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Zayah Lang</Accordion.Header>
					<Accordion.Body>
						<div className="photos">
        <img src={zayah} alt="" height={200} />
        </div>
						Software developer with growing skills in debugging and server-side logic.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Derek Douglas</Accordion.Header>
					<Accordion.Body>
						{/* <div className="photos">
        <img src={} alt="" height={200} />
        </div> */}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			</>
		);
	}
}
export default About;
