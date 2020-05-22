import React from 'react'
import BoilingVerdict from './components/boilerPlate'

class App1 extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }
    
    handleChange(e) {
        this.setState({temperature: e.target.value});  }
    
    render(){
        return(
            <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input type="text" value={this.state.temperature} onChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(this.state.temperature)} />      
            </fieldset>
        );
    }
}

export default App1;