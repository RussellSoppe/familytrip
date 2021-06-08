import chicago from "../images/city locations/chicago.jpg";
import minneapolis from "../images/city locations/minneapolis.jpg";
import memphis from "../images/city locations/memphis.jpg";
import mtrushmore from "../images/mtrushmore.jpg";
import grandcanyon from "../images/grandcanyon.jpg";



let denverhome = {
		name: "Denver",
	  location: 164,
	  imgurl: chicago,
	  id: [2, 'destination'],
	  next_leg:{
	  	0:{
	  		name: "Chicago",
			  location: 0,
			  imgurl: chicago,
			  id: [0, 'home'],
			  next_leg: {
			  	0: "finished"
			  }
			}
	  }
}

let losangeles = {
	
		name: "Los Angeles",
	  location: 922,
	  imgurl: chicago,
	  id: [2, 'destination'],
	  next_leg:{
		  0:denverhome
	 }
}

let denverwest = {
	0:{
		name: "Denver",
		location: 164,
		imgurl: chicago,
		id: [2, 'destination'],
		next_leg:{
			0:{
				name: "Mount Rushmore",
				location: 387, 
				imgurl: mtrushmore,
				id: [2, 'destination'],
				next_leg:{
					0:{
						name: "Yellow Stone National Park",
						location: 578, 
						imgurl: mtrushmore,
						id: [2, 'destination'],
						next_leg:{
							0:{
								name: "San Francisco",
								location: 722, 
								imgurl: mtrushmore,
								id: [2, 'destination'],
								next_leg:{
									0: denverhome
								}
							},
							1: losangeles
						}
					}
				}
			},
			1:{
				name: "Grand Canyon",
				location: 299,
				imgurl: grandcanyon,
				id: [2, 'destination'],
				next_leg:{
					0:{
						name: "Las Vegas",
						location: 594,
						imgurl: grandcanyon,
						id: [2, 'destination'],
						next_leg:{
							0:losangeles,
							1:{
								name: "San Diego",
								location: 789,
								imgurl: grandcanyon,
								id: [2, 'destination'],
								next_leg: {
									0: denverhome
								}
							}
						}
					}
				}
			}
		}
	}
}
	

let travelwest = {
	startinglocations:{
		0: {
			name: "Chicago",
			location: 0,
			imgurl: chicago,
			id: [0, 'home'], 
			next_leg: denverwest
		},
		1: {
			name: "Minneapolis",
			location: 0, 
			imgurl: minneapolis,
			id: [1, 'home'], 
			next_leg: denverwest
		},
		2: {
			name: "Memphis",
			location: 0,
			imgurl: memphis,
			id: [2, 'home'],
			next_leg: denverwest
		}
	}
}

export default travelwest;