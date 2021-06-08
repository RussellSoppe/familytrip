import TravelEventClass from './TravelEventClass.js';

class PlayerTravelClass extends TravelEventClass {
  
  //default player settings including default travel speed
  constructor(Player, DestinationClass, playerlocation = 0, travelspeed = 20){
    super();
    this.Player = Player;
    this.DestinationClass = DestinationClass;
    this.playerlocation = playerlocation;
    this.travelspeed = travelspeed;
  }

  getPlayerLocation(){
    return this.playerlocation;
  }

  setPlayerLocation(value){
    this.playerlocation = value;
  }

  getTravelSpeed(){
    return this.travelspeed;
  }

  setTravelSpeed(value){
    this.travelspeed = value;
  }

  getDistanceToDestination(){
    let player = this.getPlayerLocation();
    let destination = this.DestinationClass.getDestination().location;
    let remainder = destination - player;

    if(remainder <= 0){
      remainder = remainder * 1;
    }

    return remainder;
  }

  travelOneLeg(){
    let player = this.getPlayerLocation();
    let speed = this.getTravelSpeed();
    let remainder = this.getDistanceToDestination();
    
    if(remainder < speed ){
      speed = remainder;
    }

    let leg = player + speed;
    this.setPlayerLocation(leg);
  }

  destinationArrivalCheck(){
    let arrived = this.arrivalCheck(this.DestinationClass.getCurrentLocation().location, this.DestinationClass.getDestination().location);
    if(arrived){
      console.log("Arrived", arrived);
      return true;
    }else{
      return false;
    }
  }
  
  travelLoop(updateDom, toggleContinueButton, toggleArrivalDisplay){

    
    let travel = setInterval(()=>{
      
    this.setCurrentEventDescription('');
    updateDom();

      if(this.getPlayerLocation() < this.DestinationClass.getDestination().location){

        this.travelOneLeg();

        if(this.checkForBadTravelEvent()){
          this.setBadTravelEvent(this.Player.inventory);
          toggleContinueButton(false);
          updateDom();
          clearInterval(travel);
        }

      }else if(this.arrivalCheck(this.getPlayerLocation(), this.DestinationClass.getDestination().location)){
        
        this.setCurrentEventDescription(`You have arrived at ${this.DestinationClass.getDestination().name}`);
        toggleArrivalDisplay(true);
        updateDom();
        clearInterval(travel);

      }

    }, 1000);
  }

  travelLoopArchive(){

  let badevent = false;
  let currentlocation = this.props.DestinationClass.getCurrentLocation();
  let destination = this.props.DestinationClass.getDestination();

  let travel = setInterval(()=>{

    // Check if arrived, if not proceed
    if(!this.destinationArrivalCheck()){

      // Travel One leg
      this.travelOneLeg(currentlocation, destination);
  
      // Check for bad event
      if(badevent){
        
        // If badevent set bad event
        this.setBadTravelEvent();
        
        //allow an inventory check
        this.props.toggleInventoryButton();

        // pause travel until player resumes
        this.props.toggleTravelGoButtonDisable(false);

        // clear Interval
        clearInterval(travel);
      }

      // create possible bad event
      badevent = this.checkForBadTravelEvent(this.props.getChanceOfBadEvent());

      // check for arrival
      if(this.destinationArrivalCheck(`Player has arrived at ${this.props.DestinationClass.getDestination().name}!`)){
        // clearinterval
        clearInterval(travel);
      }

      // set endgame bool
      let endmessage = this.checkForEndGame();

      // check endgame bool
      if(this.props.toggleendgamestate){
        // set endgame message
        this.props.setCurrentEventDescription(endmessage);
        // clearinterval
        clearInterval(travel);
      }

    }else{
      // Set Player Arrived
      this.destinationArrivalCheck();
      // clear interval
      clearInterval(travel);
    }

  }, 1000);

}

}

export default PlayerTravelClass;