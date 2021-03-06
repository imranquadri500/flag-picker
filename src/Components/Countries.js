import React, { Component } from 'react';

class Countries extends Component{
  state = {
    country:[],
    continentPicked: []
  }

  handleInputChange = () => { 
    var updatedList = this.props.list;
    updatedList = updatedList.filter((item) =>{
      return item.continent === this.props.selected;
      })
    this.setState({ continentPicked: updatedList[0].countries })
    }
  
  handleChange = (event) =>{
    if(this.state.country.includes(event.target.id)){
      let i = this.state.country.indexOf(event.target.id)
      this.state.country.splice(i,1)
    }
    else {
      this.state.country.push(event.target.id);
    }
    this.props.selectedCountries(this.state.country)
  }

  handleClearChange= () =>{
    this.setState({ continentPicked: []})
  }

  render(){
    return (
        <form>
          <h2> Step 2 </h2>
          <p> Now, select a country. </p>
          <input
            onFocus={this.handleInputChange} 
            list= "dropbox"/>
          <ul id="dropbox" >
            {this.state.continentPicked.map((data,index) =>
              <li style={{ width: "20em", textAlign: "left"}} key={index}>
                <input type="checkbox" id={data.flag} onChange={this.handleChange}/>{data.name}
              </li>  
            )}
          </ul>
          <br></br>
          {this.state.continentPicked.length>0 && <button onClick={this.handleClearChange}>Clear Countries</button>}
        </form>
    )
  }
}

export default Countries