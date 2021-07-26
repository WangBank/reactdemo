import React from 'react'
import logoImg from './logo.jpg'
import './logo.css'


class Logo extends React.Component{
  render(){
    return (
      <div className="logoclass">
        <img height="200" width="200" src={logoImg} alt=""></img>
      </div>
    )
  }
}

export default Logo