import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (

		<div className="text-center">
			

			<Navbar/>
			<Jumbotron/>
			<br/>
			<div className="row">
			<div className="col">

			<Card imagen="https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg" titulo="gato"/>
			
			</div>
			<div className="col">
				
			<Card imagen="https://png.pngtree.com/background/20230611/original/pngtree-drawing-of-a-colorful-parrot-sitting-on-a-branch-picture-image_3172349.jpg" titulo="loro"/>
			
			</div>
			<div className="col">
				
			<Card imagen="https://static.wikia.nocookie.net/wikia_tortuga/images/9/99/Tortuga-rusa.jpg/revision/latest/scale-to-width-down/800?cb=20200526211233&path-prefix=es" titulo="tortuga"/>
			
			</div>
			<div className="col">
				
			<Card imagen="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/09151144/Alaskan-Malamute-standing-in-the-grass1.jpg" titulo="Lobo"/>
			
			</div>
			</div>
			
			<Footer/>

		</div>
	);
};

export default Home;
