import React from 'react'
import {connect} from 'react-redux'
import { List, InputItem, WhiteSpace,WingBlank,Button,Toast } from 'antd-mobile';
import Logo from '../../component/logo/logo'
import {login} from '../../redux/user/user.redux'
import { Redirect } from 'react-router-dom';

@connect(
  state=>state.user,
  {login}
)
class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
    this.state = {
      username:'',
      pwd:'',
      errors:{
        hasUserNameError:false,
        hasPwdError:false,
      }
    }
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

  handleLogin(){
    this.props.login(this.state)
  }

  register(){
    this.props.history.push('/register')
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
        <h2>Login</h2>
        <List>
          <InputItem 
          onChange={v=>this.handleChange('username',v)}
          placeholder="input your username"
          error={this.state.errors.hasUserNameError}
          onErrorClick={this.onUserNameErrorClick}
          >UserName</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem 
          type="password" 
          onChange={v=>this.handleChange('pwd',v)}
          placeholder="input your password"
          error={this.state.errors.hasPwdError}
          onErrorClick={this.onPwdErrorClick}
          >Password</InputItem>
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