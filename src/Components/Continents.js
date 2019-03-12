import React, { Component }  from 'react'


class Continents extends Component{
  state={
    selected: false
  }
  keyChange = (e) =>{
    if(e.key==='enter'){
      this.setState({
        selected: true
      })
    }
  }
  render(){
  return (
    <div>
        <datalist id={this.props.data}>
          {this.props.resultsContinents.map((data,index) =>
              <option value={data.continent} key={index} selected={this.state.selected} onKeyPress={this.keyChange}/>
          )}
        </datalist>
    </div>
  )
}
}

export default Continents