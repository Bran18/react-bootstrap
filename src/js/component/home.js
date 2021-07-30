import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import MiddleCard from "./MiddleCard";
import Feature from "./Feature";
import Contact from "./Contact";

//import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export function Home() {
	return (
		<div className="text-center">
			<NavBar />
			<Hero />
			<MiddleCard />
			<Feature />
			<Contact />
		</div>
	);
}
