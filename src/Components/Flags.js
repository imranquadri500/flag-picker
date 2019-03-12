import React, { Component } from 'react'

class Flags extends Component{

  state ={
    countries: this.props.countriesSelected
  }
  
  clickHandler =() =>{
    this.setState({ 
      countries: []
    })
  }

  render(){
    return (
      <div>
        <h2>Selected Flags:</h2>
        {this.state.countries.map((data,index)=>{ return(<li key={index}>{data}</li>) })}
        <br></br>
        <button onClick={this.clickHandler}>Clear Flags</button>
      </div>
    )
  }
}

export default Flags
