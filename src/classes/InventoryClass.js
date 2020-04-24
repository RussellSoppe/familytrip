class InventoryClass {
  constructor(gas, food, barfbags, money) {
    this.gas = gas;
    this.food = food;
    this.barfbags = barfbags;
    this.money = money;
  }

	// Gas
	getMyGas() {
		return this.gas;
	}

	setMyGas(value){
	 this.gas = this.gas + value;
	}

	// Food
	getMyFood() {
		return this.food;
	}

	setMyFood(value){
	 this.food = this.food + value;
	}

	// Barf Bags
	getMyBarfBags() {
		return this.barfbags;
	}

	setMyBarfBags(value){
	 this.barfbags = this.barfbags + value;
	}

	// Money
	getMyMoney() {
		return this.money;
	}

	setMyMoney(value){
	 this.money = this.money + value;
	}

	updateInventory(category, value){

		switch(category){
			case "myGas":
				this.setMyGas(value);
				break;
			case "myFood":
				this.setMyFood(value);
				break;
			case "myBarfBags":
				this.setMyBarfBags(value);
				break;
			case "myMoney":
				this.setMyMoney(value);
				break;
			default:
				console.log("No Category Found", category, value);
		}
	}

}

export default InventoryClass;