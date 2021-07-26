import React from 'react'
import {connect} from 'react-redux'
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';
import Logo from '../../component/logo/logo'

import {register} from '../../redux/user/user.redux'
import { Redirect } from 'react-router-dom';

@connect(
  state=>state.user,
  {register}
)
class Register extends React.Component{
  constructor(props){
    super(props);
    this.go_to_login = this.go_to_login.bind(this)
    this.state = {
      username:'',
      pwd:'',
      errors:{
        hasUserNameError:false,
        hasPwdError:false,
      }
    }
  }

  go_to_login(){
    this.props.history.push('/login')
  }
  handleChange(key,value){
    if(key === 'pwd' && (!value || value.length < 6)){
      this.setState({
        errors:{
          hasPwdError:true,
        }
      });
    }else if(key === 'username' &&  value.length === 0){
      this.setState({
        errors:{
          hasUserNameError:true,
        }
      });
    }else{
      this.setState({
        [key]:value,
        errors:{
          hasUserNameError:false,
          hasPwdError:false,
        }
      })
    }
  }

  handleRegiter(){
    this.props.register(this.state)
  }
  onUserNameErrorClick = ()=>{
    if (this.state.errors.hasUserNameError) {
      Toast.info('Please enter your username');
    }
  }

  onPwdErrorClick = ()=>{
    if (this.state.errors.hasPwdError) {
      Toast.info('Please enter 6 digits at least');
    }
  }
  render(){
    return (
      <div>
      <Logo></Logo>
      {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect>: null}
      <h2>Register</h2>
      <List>
          <InputItem 
            onChange={v=>this.handleChange('username',v)}
            placeholder="input your username"
            error={this.state.errors.hasUserNameError}
            onErrorClick={this.onUserNameErrorClick}
          >UserName
          </InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem 
          type="password" 
          onChange={v=>this.handleChange('pwd',v)}
          placeholder="input your password"
          error={this.state.errors.hasPwdError}
          onErrorClick={this.onPwdErrorClick}
          >Password</InputItem>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={()=>this.handleRegiter()}>Register</Button>
        </List>
      </div>
    )
  }
}

export default Register