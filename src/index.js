import React from 'react';
import ReactDOM from 'react-dom';
var styles={color:'blue'}
var styles1={color:'red'}
class Card extends React.Component {
    render(){
        return (
          <div className="card">
          <h1>  <p style={styles1}>{this.props.name}</p></h1>
          </div>
      );
  }
}

class App extends React.Component {

    // fires before component is mounted
    constructor(props) {
        
        // makes this refer to this component
        super(props);

        // set local state
        this.state = {
            name: "Sudharani"
        };

    }

    render() {
        setTimeout(()=>{this.setState({name:'rani'})},5000);
        const {name} = this.state; 
        return (
          <div>  
            <h1 style={styles}>This Computer belongs to:</h1>
            <Card name={name}> </Card>
          </div>
      )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);