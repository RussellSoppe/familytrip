class EndGameClass {
  constructor(props) {
    
      this.props = props;

  }

  checkForEndGame(object, timedelay){

  	switch(true){

  		case object.getMyGas() <= 0:
  			return ({bool: true, message:"Gas tank empty, game over"});
  			
  		case object.getMyFood() <= 0:
  			return ({bool: true, message:"Food empty, game over"});
  			
  		case object.getMyBarfBags() <= 0:
  			return ({bool: true, message:"Barf Bags empty, game over"});
  			
  		default:
  			return ({bool:false, message: "Keep going, you can do it!"});

  			// console.log(object.getMyMoney(), object.getMyBarfBags(), object.getMyFood(), object.getMyGas());
  	}

  }
  
}

export default EndGameClass;