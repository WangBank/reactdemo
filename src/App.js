import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'


function App(props) {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.boss} and save to reload.
        </p>
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
        <Button type='primary' onClick={this.addPerson}>add new person</Button>
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
