import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button,List} from 'antd-mobile'
import {createStore} from 'redux'

// function counter(state=0,action){
//   switch (action.type) {
//     case 'qin':
//       return state+1      
//     case 'wang':
//         return state-1
//     default:
//       return 10
//   }
// }

// const store = createStore(counter)
// function listerner(){
//   const current = store.getState()
//   console.log(current)
// }

// store.subscribe(listerner)

// store.dispatch({type:'qin'})
// store.dispatch({type:'wang'})
// store.dispatch({type:'wang'})

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
        <List 
         renderHeader={()=>'家庭吆'}>
          {this.state.family.map(f=>
            {
              return (<List.Item key={f}>{f}
                    </List.Item>)
            }
            )}
         </List>
      </div>
    )
  }
}

export default App;
