import React from 'react'
import { List, InputItem, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import Logo from '../../component/logo/logo'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.go_to_login = this.go_to_login.bind(this)
  }

  go_to_login(){
    this.props.history.push('/login')
  }
  render(){
    return (
      <div>
      <Logo></Logo>
      <h2>Register</h2>
      <List>
          <InputItem>UserName</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>Password</InputItem>
          <WhiteSpace></WhiteSpace>
          <Button type="primary">Register</Button>
        </List>
      </div>
    )
  }
}

export default Register