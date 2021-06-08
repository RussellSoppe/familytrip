
class DestinationClass {

  constructor(alldestinations) {
    this.alldestinations = alldestinations;
    this.startinglocations = alldestinations.startinglocations;
    this.startlocation = {}; 
    this.destination = {
      name: "Grocery Store",
      location: 50,
      imgurl: 'www.nopic.com/pic.jpg',
      id: 0,
      next_leg: null
    };
    this.currentlocation = {
      name: "Home",
      location: 0,
      imgurl: 'www.nopic.com/pic.jpg',
      id: 0,
      next_leg: null
    };

  }

  getAllDestinations(){
    return this.alldestinations;
  }

  getStartingLocations(){
    return this.startinglocations;
  }

  setDestination(object){
    this.destination = object;
  }

  getDestination(){
    return this.destination;
  }
  
  setStartLocation(object){
    this.startlocation = object;
  }

  getStartLocation(){
    return this.startlocation;
  }

  setCurrentLocation(object){
    this.currentlocation = object;
  }
 
  getCurrentLocation(){
    return this.currentlocation;
  }

  getDistanceBetween(startobject = this.currentlocation, endobject = this.destination){

    let distancebetween = startobject.location - endobject.location;

    if(distancebetween <= 0){
      distancebetween = distancebetween * -1;
    }
    
    return distancebetween;
  }


}

export default DestinationClass;