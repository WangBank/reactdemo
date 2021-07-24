import axios from 'axios'
import React from 'react'

class Auth extends React.Component{
  componentDidMount(){
    axios.get('/user/info').then(
      res=>{
        if(res.status ==200){
          console.log(res.data)
        }
      }
    )
  }
  render(){
    return (
      <div>
        <h2>ss</h2>
      </div>
    )
  }
}

export default Auth