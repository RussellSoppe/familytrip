import murkylake from "../images/murkylake.jpg";
import mtrushmore from "../images/mtrushmore.jpg";
import grandcanyon from "../images/grandcanyon.jpg";
import riverwood from "../images/riverwood.jpg";
import colliseum from "../images/colliseum.jpg";
import finishline from "../images/finishline.jpg";
import home from "../images/home.jpg";

let destinations  = {
	0: {
		name: "Murky Lake",
		location: 164,
		distance: 120,
		imgurl: murkylake,
		id: 0
	},
	1: {
		name: "Mount Rushmore",
		location: 387, 
		distance: 280,
		imgurl: mtrushmore,
		id: 1
	},
	2: {
		name: "Grand Canyon",
		location: 594,
		distance: 310,
		imgurl: grandcanyon,
		id: 2
	},
	3: {
		name: "River Wood",
		location: 823,
		distance: 100,
		imgurl: riverwood,
		id: 3

	},
	4: {
		name: "The Colliseum",
		location: 1162,
		distance: 570,
		imgurl: colliseum,
		id: 4
	},
	finish: {
		name: "Finish Line",
		location: null,
		distance: 0,
		imgurl: finishline,
		id: 'finish'
	},
	home: {
		name: "Home",
		location: 0,
		distance: 0,
		imgurl: home,
		id: 'start'
	}
}

export default destinations;