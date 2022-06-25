import React from 'react';
import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import natalija from '../img/natalija.jpeg';
import zayah from '../img/tigrProfile.png';
import derek from '../img/pro100.jpg';

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
							<img src={natalija} alt="" height={130} />
						</div>
						I'm a software developer with a background in the banking industry. For the last sixteen years I have worked almost every position in the banking center and in the market from auditing, sales, managing, and mentoring. I love to be in the great outdoors as much as possible and travel frequently. My interest in software development stemmed from a youth curiosity when I completed my first Cysco Networking class then developed as I got older and the problems of everyday life became more complex. My passion is in finding technological solutions in everyday problems as efficiently as possible.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Zayah Lang</Accordion.Header>

					<Accordion.Body id="zayahColors">
						<div className="photos">
        <img src={zayah} alt="" height={200} />
        </div>
						Software developer with growing skills in debugging and server-side logic.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Derek J. Douglas</Accordion.Header>
					<Accordion.Body id="derekColors">
						<div className="photos">
        <img src={derek} alt="" height={100} />
        </div>
						Hi! I'm a software developer with a background in the teaching and linguistics.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			</>
		);
	}
}
export default About;
