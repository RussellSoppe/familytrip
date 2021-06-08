// images
import policeicon from '../images/player class icons/police_icon.png';
import teachericon from '../images/player class icons/teacher_icon.png';
import softwaredevicon from '../images/player class icons/software_dev_icon.png';

import InventoryClass from '../classes/InventoryClass.js';


let playerClassArray = [
	{classObject:{
		classtype: 'police',
		classtitle: "Police Officer",
		imageurl: policeicon,
		inventory: new InventoryClass(25, 5, 40, 250),
	}},
	{classObject:{
		classtype: 'teacher',
		classtitle: "Teacher",
		imageurl: teachericon,
		inventory: new InventoryClass(10, 10, 15, 300),
	}},
	{classObject:{
		classtype: 'software_engineer',
		classtitle: "Software Engineer",
		imageurl: softwaredevicon,
		inventory: new InventoryClass(12, 2, 12, 800),
	}}
];

export default playerClassArray;