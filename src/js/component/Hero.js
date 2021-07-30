import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Hero = () => {
	return (
		<Jumbotron fliud>
			<Container className="hero-container">
				<h1>Wellcome</h1>
				<p>This is just a try on react boostrap. Nothing else..</p>
			</Container>
		</Jumbotron>
	);
};

export default Hero;
