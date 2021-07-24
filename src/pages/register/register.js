import React from 'react'
import { List, InputItem, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import Logo from '../../component/logo/logo'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.go_to_login = this.go_to_login.bind(this)
    this.state = {
      user_name:'',
      pwd:''
    }
  }

  go_to_login(){
    this.props.history.push('/login')
  }
  handleChange(key,value){
    this.setState({
      [key]:value
    })
  }

  handleRegiter(){
    console.log(this.state)
  }

  render(){
    return (
      <div>
      <Logo></Logo>
      <h2>Register</h2>
      <List>
          <InputItem onChange={v=>this.handleChange('user_name',v)}>UserName</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>Password</InputItem>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={()=>this.handleRegiter()}>Register</Button>
        </List>
      </div>
    )
  }
}

export default Register