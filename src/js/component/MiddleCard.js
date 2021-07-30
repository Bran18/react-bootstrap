import React from "react";
import { CardGroup, Card, CardDeck, Container, Button } from "react-bootstrap";
import stage01 from "../../img/stage01-es.png";
import stage02 from "../../img/stage02-es.png";
import stage03 from "../../img/stage03-es.png";

const MiddleCard = () => {
	return (
		<Container className="mt-5">
			<CardDeck>
				<Card border="light" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={stage03} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Button variant="success" size="sm" mx="auto">
						Success
					</Button>
				</Card>
				<Card border="light" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={stage02} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural
							lead-in to additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Button variant="success" size="sm" mx="auto">
						Success
					</Button>
				</Card>
				<Card border="light" style={{ width: "18rem" }}>
					<Card.Img variant="top" src={stage01} />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</Card.Text>
					</Card.Body>

					<Button variant="success" size="sm" mx="auto">
						Success
					</Button>
				</Card>
			</CardDeck>
		</Container>
	);
};

export default MiddleCard;
