import React, { Component } from 'react'
import './App.css';
import DataBox from './Components/DataBox'
import Countries from './Components/Countries'
import Flags from './Components/Flags'

class App extends Component {
  state ={
    continents: [],
    continentSelected:'',
    countriesSelected:''
  }



  listContinents = (list) =>{
    this.setState({ continents: list })
  }

  fromContinent = (data) =>{
    this.setState({ continentSelected: data })
    
  }

  selectedCountries = (data) =>{
    this.setState({ countriesSelected: data })
  }

  render() {
  
    return (
      <div className="App">
        <h1>FLAG PICKER</h1>
        <h3>This app will help you to learn flags around the world in 3 steps.</h3>
        <br/>
        <div className="col-style">
          <DataBox  
            selectedContinent={this.fromContinent} 
            listContinents={this.listContinents} />
        </div>
        { this.state.continentSelected && 
            <div className="col-style">
                <Countries 
                selected={this.state.continentSelected} 
                list={this.state.continents} 
                selectedCountries={this.selectedCountries}/>
            </div> 
        } 
        { this.state.countriesSelected &&
            <div className="col-style">
              <Flags  
                countriesSelected={this.state.countriesSelected}/>
            </div>
        }
      </div>
    );
  }
}

export default App;
