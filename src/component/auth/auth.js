import axios from 'axios'
import React from 'react'
import {
  withRouter
} from "react-router-dom"

@withRouter
class Auth extends React.Component{
  componentDidMount(){
    const publicList = ['/login','/register']
    const pathname = this.props.history.location.pathname
    if(publicList.indexOf(pathname) === -1){
      axios.get('/user/info').then(
        res=>{
          if(res.status ===200){
           let data = res.data
           if(data.code ===0){
             this.props.history.push('/')
           }else{
            this.props.history.push('/login')
           }
          }
        }
      )
    }

  }
  render(){
    return <div></div>
  }
}

export default Auth