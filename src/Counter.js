import React, { Component } from 'react' ;

class Counter extends Component {

  constructor (props) {
    super(props);

      this.state = {
        autoClickedIncrement : false,
        count: 0,
        autoClickedDecrement : false
      }


  }


 incrementFunction = () => {



  this.setState(function (currentState){
    return {count : currentState.count + 1  }
  })
}

decrementFunction =  () => {

  this.setState(function (currentState) {
    return { count : currentState.count - 1}
  })
}

autoIncrement = () => {

if(!this.state.autoClickedIncrement) {


setInterval(   () => {

 this.setState(function (currentState){
   return {count : currentState.count + 1  , autoClickedIncrement: true }
 })
}     , 1000 ) }

}

autoDecrement = () => {

if(!this.state.autoClickedDecrement) {

  setInterval(  () => {
    this.setState((currentState) => {
  return   {count : currentState.count - 1 , autoClickedDecrement : true}
  })}    , 1000)
}
}


selfDestruct = () => {

this.props.ShowCounter();
console.log('showCounter called')

}


render(){
  return (
    <div>
      {this.state.count}
      <button onClick={this.incrementFunction} >Increment</button>
      <button onClick={this.decrementFunction} >Decrement</button>
      <button onClick={this.autoIncrement}> Auto Increment </button>
      <button onClick={this.autoDecrement}> Auto Decrement </button>
      <button onClick={this.selfDestruct}> Self Destruction </button>


    </div>
  )
}




}

export default Counter;
