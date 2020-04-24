
class DestinationClass {

  constructor(destinations, startlocation) {
    this.destinations = destinations;
    this.startlocation = startlocation;
    this.currentlocation = this.destinations['home'];
    this.nextdestination = this.destinations[0];
    this.currentdestination = null;
    this.destinationtrackingarray = [];
  }

  getDestinations(){
    return this.destinations;
  }

  // to be depricated
  getDestination(key=0){
  	return this.destinations[key];
  }

  getStartLocation(){
  	return this.startlocation;
  }

  // to be depricated
  setCurrentLocation(key=0){
    this.currentlocation = this.destinations[key];
  }
  // to be depricated
  getCurrentLocation(){
    return this.currentlocation;
  }

  setCurrentDestination(key=0){
    this.currentdestination = this.destinations[key];
  }

  getCurrentDestination(){
    return this.currentdestination;
  }

  setNextDestination(key=0){
    this.nextdestination = this.destinations[key];
  }

  getNextDestination(){
    return this.nextdestination;
  }

  getDistanceBetween(currentkey = 'home', nextkey = 0){
   
    if(typeof this.getDestination(currentkey) !== 'undefined'){

      let here = this.getDestination(currentkey).location;
     
      if(typeof this.getDestination(nextkey) !== 'undefined'){

        let there = this.getDestination(nextkey).location;
        let distancebetween = here - there;

        if(distancebetween < 0){
          distancebetween = distancebetween * -1;
        }
        
        return distancebetween;

      }
    }
  }

  addDestinationToTrackingArray(key){
      this.destinationtrackingarray.push(key);
  }

  checkDestinationTrackingArray(key){
      return(this.destinationtrackingarray.includes(key));
  }

}

export default DestinationClass;