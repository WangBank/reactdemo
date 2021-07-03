import './App.css';
import React from 'react';
import {addPerson,leavePerson} from './index.redux'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const store = this.props.store
    const num = store.getState()
    return(
      <div>
      <p>现在有人{num}个</p>
      <button onClick={()=>store.dispatch(addPerson())}>加人</button>
      <button onClick={()=>store.dispatch(leavePerson())}>减人</button>
      </div>
    )
  }
}

export default App;
