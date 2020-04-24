import React from 'react';
import './Shop.css';


class Shop extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      gasdescription: "$2.50 per gallon",
      gascost: -2.5,
      gasinput: 0, 
      fooddescription: "$4.00 per unit", 
      foodcost: -4, 
      foodinput: 0,
      barfbagdescription: "$1 per bag",
      barfbagcost: -1,
      barfbaginput: 0 
    }
  }

onGasInput=(event)=>{
  this.setState({
    gasinput: Number(event.target.value)
  });
}

onFoodInput=(event)=>{
  
  this.setState({
    foodinput: Number(event.target.value)
  });
}

onBarfBagInput=(event)=>{

  this.setState({
    barfbaginput: Number(event.target.value)
  });
}

buyGasNow=(amount)=>{
  console.log(typeof amount);
  console.log(typeof this.props.PlayerInventory.getMyGas());

  let totalcost = amount * this.state.gascost;
  console.log(typeof totalcost);

  console.log (totalcost, amount);
  this.props.PlayerInventory.setMyGas(amount);
  this.props.PlayerInventory.setMyMoney(totalcost);
}

buyFoodNow=(amount)=>{
  let totalcost = amount * this.state.foodcost;
  console.log (totalcost, amount);
  this.props.PlayerInventory.setMyFood(amount);
  this.props.PlayerInventory.setMyMoney(totalcost);
}

buyBarfBagsNow=(amount)=>{
  let totalcost = amount * this.state.barfbagcost;
  console.log (totalcost, amount);
  this.props.PlayerInventory.setMyBarfBags(amount);
  this.props.PlayerInventory.setMyMoney(totalcost);
}

render(){ 
  return (

    <div id="shop" style={this.props.toggleshopscreen ? {display:"inline"} : {display:"none"}}>

      <div className="shop-inner-container">

        <div>
          <h3>Gas</h3>
          <div>{this.state.gasdescription}</div>
          <input type="number" onChange={(event)=>{this.onGasInput(event)}} value={this.state.gasinput}></input>
          <button onClick={()=>{
            this.buyGasNow(this.state.gasinput);
            this.setState({
              gasinput: ""
            });
          }}>Buy Now</button>
          
        </div>

        <div>
          <h3>Food</h3>
          <div>{this.state.fooddescription}</div>
          <input type="number" onChange={(event)=>{this.onFoodInput(event)}} value={this.state.foodinput}></input>
          <button onClick={()=>{
            this.buyFoodNow(this.state.foodinput);
            this.setState({
              foodinput: ""
            });
          }}>Buy Now</button>
          
        </div>

        <div>
          <h3>Barf Bags</h3>
          <div>{this.state.barfbagdescription}</div>
          <input type="number" onChange={(event)=>{this.onBarfBagInput(event)}} value={this.state.barfbaginput}></input>
          <button onClick={()=>{
            this.buyBarfBagsNow(this.state.barfbaginput);
            this.setState({
              barfbaginput: ""
            });
          }}>Buy Now</button>
        </div>
          
        <button onClick={()=>this.props.toggleScreenOff()}>Back</button>

      </div>

    </div>
  );
}}

export default Shop;