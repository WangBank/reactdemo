import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(props) {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.boss} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Testzz boss='wangzhen'></Testzz>
      </header>
    </div>
  );
}

class Testzz extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      family:['bank','qin limin','wa']
    }
  }
  addPerson=()=>{
    this.setState({
      family:[...this.state.family,Math.random()]
    })
  }

  render(){
    return(
      <div>
        <p>boss is {this.props.boss}</p>
        <button onClick={this.addPerson}>add new person</button>
        <ul>
          {this.state.family.map(f=>{
            return <li key={f}>{f}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
