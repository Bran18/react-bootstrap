import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

const navbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">React Bootstrap Test</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav center">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default navbar;
