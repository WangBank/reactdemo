import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const store = this.props.store
    const num = store.getState()
    const addPerson = this.props.addPerson
    const leavePerson = this.props.leavePerson
    const addPersonAsync = this.props.addPersonAsync
    return(
      <div>
      <p>现在有人{num}个</p>
      <button onClick={()=>store.dispatch(addPerson())}>加人</button>
      <button onClick={()=>store.dispatch(leavePerson())}>减人</button>
      <button onClick={()=>store.dispatch(addPersonAsync())}>隔两秒摇人</button>
      </div>
    )
  }
}

export default App;
