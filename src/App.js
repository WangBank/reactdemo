import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {addPerson,leavePerson,addPersonAsync} from './index.redux'

// const mapStatetoProps= (state)=>{
//   return {num:state}
// }
// const actionCreator = {addPerson,leavePerson,addPersonAsync}

//App = connect(mapStatetoProps,actionCreator)(App)
@connect(
  state=>({num:state}),
  {addPerson,leavePerson,addPersonAsync}
  )
class App extends React.Component{
  render(){
    return(
      <div>
      <p>现在有人{this.props.num}个</p>
      <button onClick={this.props.addPerson}>加人</button>
      <button onClick={this.props.leavePerson}>减人</button>
      <button onClick={this.props.addPersonAsync}>隔两秒摇人</button>
      </div>
    )
  }
}


export default App;
