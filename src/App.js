import React from 'react';
import axios from 'axios';
import './App.css';

//need to add a state value to increase clicks 
class App extends React.Component {
  state = {
    chuck: '',
  };

  componentDidMount() {
    console.log("Mounted up")
    this.fetchChuck();
  }
  
  // fetchAdd() {
  //   this.handleClick();
  //   this.fetchChuck();
  // }
  // handleClick() {
  //   console.log('Click happened');
  // }
  
  fetchChuck = () => {
    axios.get(`https://api.chucknorris.io/jokes/random`)
    .then(response => {
      console.log("response:", response.data.value);
      this.setState({ chuck: response.data.value });
    })
    .catch ((error) => {
      console.log(error)
    })
    
  }

  render() {
    const { chuck } = this.state;
    return (
      <div className="App">
        <div className="joke-card">
          <h1 className="joke-itself">{chuck}</h1>
          <button className="button" onClick={this.fetchChuck}>Chuck it up</button>
        </div>
      </div>
    );
  }
}

export default App;