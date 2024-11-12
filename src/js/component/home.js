import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import image1 from "../../img/osaka1.jpg";
import image2 from "../../img/kioto2.jpg";
import image3 from "../../img/Koyasan3.jpg";
import image4 from "../../img/tokio4.jpg";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	//logica
	let data = [
		{
			title: "Osaka",
			description: "La ciudad más grande de la región de Kansai es una verdadera sorpresa para todos aquellos que se animan a conocerla. ",
			imageUrl: image1
		},
		{
			title: "Kioto",
			description: " Kioto es una de las ciudades más bonitas del país y también la que reúne más templos y lugares de interés.",
			imageUrl: image2
		},
		{
			title: "Koyasan",
			description: "Se trata de un sitio muy espiritual, sede del budismo de la escuela shingon, y te ofrece la posibilidad de pasar una noche en un monasterio o shukubo.",
			imageUrl: image3
		},
		{
			title: "Tokio",
			description: "Como estamos locamente enamorados de ellas, nuestro consejo es que no dediques menos de 4 días a disfrutar de los barrios más interesantes de Tokio.",
			imageUrl: image4
		}

	]
	return (
		<div className="text-center fullscreen">
			<NavBar />
			<div className="container">
				<div className="row mt-5 mb-5"/>				
				<Jumbotron />
				<div className="row d-flex justify-content-around mt-5">
					{data.map((value, index, array) => {
						return <Cards key={index} title={value.title} description={value.description} imageUrl={value.imageUrl} />
					})}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;

