class PlayerTravel {
  constructor() {
    this.state = {
    	data: "Text"

    };
  }


  setState(key, value){

  	this.state[key] = value;

  }

  getState(key){

  	return this.state[key];

  }


}

export default PlayerTravel;