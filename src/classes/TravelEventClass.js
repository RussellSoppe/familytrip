import badevents from '../gamedata/badevents.js';


class TravelEventClass {
  
  constructor(){
    this.badeventchance = 15;
    this.currenteventdescription = '';
  }


  getBadEventChance(){
    return this.badeventchance;
  }

  setBadEventChance(value){
    this.badeventchance = value;
  }

  getCurrentEventDescription(){
    return this.currenteventdescription;
  }

  setCurrentEventDescription(string){
    this.currenteventdescription = string;
  }

//Chances of having an event while traveling
  rollForEvent(){
    let roll = Math.floor(Math.random() * 101);
    return roll;
  }

  checkForBadTravelEvent(percent=this.getBadEventChance()){
    let roll = this.rollForEvent();
  
    let rollcheck = roll <= percent;
    if(rollcheck){
      return true;
    }
  }

// Not yet rewritten/tested
setBadTravelEvent(InventoryClass, obj=badevents){
  // reset at later point to turn badeventcase into a random choice based on length of array/object to ensure always works with object as is intead of hard code - see https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
    let badeventcase = function (obj=obj) {
      var keys = Object.keys(obj);
      let randomkey = Math.floor(Math.random() * keys.length);
      return randomkey;
    };

    let badevent = badevents[badeventcase(badevents)];
          
    this.setCurrentEventDescription(badevent.description);
    // console.log("Travel: setBadTravelEvent: badevent.description", badevent.description);
     
    //must recieve PlayerInventory.updateInventory() 
    InventoryClass.updateInventory(badevent.inventorycat, badevent.cost); 
}

checkForEndGame(Inventory, Location){

    switch(true){

      case Inventory.getMyGas() <= 0:
        return ({bool: true, message:"Gas tank empty, game over"});
        
      case Inventory.getMyFood() <= 0:
        return ({bool: true, message:"Food empty, game over"});
        
      case Inventory.getMyBarfBags() <= 0:
        return ({bool: true, message:"Barf Bags empty, game over"});

      // case Location.getCurrentLocation() === 'finalarrival':
      //   return ({bool: true, message:"You have arrived at your final destination!!! GAME OVER."});
        
      default:
        return ({bool:false, message: "Keep going, you can do it!"});

    }
}

arrivalCheck(alpha, omega){

  if(alpha >= omega){
    return true;
  }else{
    return false;
  }
    
}
  

}

export default TravelEventClass;