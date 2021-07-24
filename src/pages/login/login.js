import React from 'react'
import { List, InputItem, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import Logo from '../../component/logo/logo'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
    this.state = {
      user_name:'',
      pwd:''
    }
  }
  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }

  handleLogin(){
    console.log(this.state)
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
          <InputItem onChange={v=>this.handleChange('user_name',v)}>UserName</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>Password</InputItem>
        </List>
        <WingBlank>
          <Button type="primary" onClick={()=>this.handleLogin()}>Login</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>Register</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login