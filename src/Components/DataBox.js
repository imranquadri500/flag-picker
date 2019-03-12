import React, { Component } from 'react'
import Continents from './Continents'

class DataBox extends Component {
  state = {
    
    continentSelected: '',
    lookup: '',
    list: "data",
    continents: [{
      "continent": "Africa",
      "countries": [
        {
          "name": "Nigeria",
          "flag": "🇳🇬"
        },
        {
          "name": "Ethiopia",
          "flag": "🇪🇹"
        },
        {
          "name": "Egypt",
          "flag": "🇪🇬"
        },
        {
          "name": "DR Congo",
          "flag": "🇨🇩"
        },
        {
          "name": "South Africa",
          "flag": "🇿🇦"
        }
      ]
    },
    {
      "continent": "America",
      "countries": [
        {
          "name": "USA",
          "flag": "🇺🇸"
        },
        {
          "name": "Brazil",
          "flag": "🇧🇷"
        },
        {
          "name": "Mexico",
          "flag": "🇲🇽"
        },
        {
          "name": "Colombia",
          "flag": "🇨🇴"
        },
        {
          "name": "Argentina",
          "flag": "🇦🇷"
        }
      ]
    },
    {
      "continent": "Asia",
      "countries": [
        {
          "name": "China",
          "flag": "🇨🇳"
        },
        {
          "name": "India",
          "flag": "🇮🇳"
        },
        {
          "name": "Indonesia",
          "flag": "🇮🇩"
        },
        {
          "name": "Pakistan",
          "flag": "🇵🇰"
        },
        {
          "name": "Bangladesh",
          "flag": "🇧🇩"
        }
      ]
    },
    {
      "continent": "Europe",
      "countries": [
        {
          "name": "Russia",
          "flag": "🇷🇺"
        },
        {
          "name": "Germany",
          "flag": "🇩🇪"
        },
        {
          "name": "UK",
          "flag": "🇬🇧"
        },
        {
          "name": "France",
          "flag": "🇫🇷"
        },
        {
          "name": "Italy",
          "flag": "🇮🇹"
        }
      ]
    },
    {
      "continent": "Oceania",
      "countries": [
        {
          "name": "Australia",
          "flag": "🇦🇺"
        },
        {
          "name": "Papua New Guinea",
          "flag": "🇵🇬"
        },
        {
          "name": "New Zealand",
          "flag": "🇳🇿"
        },
        {
          "name": "Fiji",
          "flag": "🇫🇯"
        },
        {
          "name": "Solomon Islands",
          "flag": "🇸🇧"
        }
      ]
    }]
  }
  
  inputChangeHandler = (event) => {
    let arr = this.state.continents.map(data =>{ return data.continent })
    if(arr.includes(event.target.value)){
      this.setState({ continentSelected: event.target.value })
      this.props.selectedContinent(event.target.value)
      this.props.listContinents(this.state.continents)
    }
  }

  clickHandler = () =>{
    this.setState({
      continentSelected: ''
    })
    document.getElementById('Input').value = ''
  }

  render() {
    return (
      <form>
        <h2>Step 1</h2>
        <p>Select a Continent.</p>
        <input
          id="Input"
          ref={input => this.lookup = input}
          onChange={this.inputChangeHandler}
          list={this.state.list}
        />
      <Continents resultsContinents={this.state.continents} data={this.state.list} />
      <br></br>
      {this.state.continentSelected && 
        <div> Selected Continent:
          <br></br><br></br>
         <h2>{this.state.continentSelected}</h2> 
          <br></br>
          <br></br>
          <button onClick={this.clickHandler}>Clear Continent</button>
        </div>
       }
       
      </form>
    )
  }
}

export default DataBox
