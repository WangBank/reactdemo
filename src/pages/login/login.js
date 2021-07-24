import React from 'react'
import { List, InputItem, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import Logo from '../../component/logo/logo'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
  }

  register(){
    this.props.history.push('/register')
  }

  render(){
    return (
      <div>
        <Logo></Logo>
        <h2>Login</h2>
        <List>
          <InputItem>UserName</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>Password</InputItem>
        </List>
        <WingBlank>
          <Button type="primary">Login</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>Register</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login