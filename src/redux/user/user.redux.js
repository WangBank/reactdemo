import axios from "axios"
import {getRedirectPath} from '../../common/common'

const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL"
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL"
const ERROR_MSG = "ERROR_MSG"
const initstate = {
    isAuth:false,
    redirectTo:'',
    username:'',
    pwd:'',
    msg:''
}

export function user(state = initstate,action){
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
      return {...state,msg:'',isAuth:true,redirectTo:getRedirectPath(),...action.data}
    case LOGIN_SUCCESSFUL:
      return {...state,msg:'',isAuth:true,redirectTo:getRedirectPath(),...action.data}
    case ERROR_MSG:
        return {...state,msg:action.msg,isAuth:false}
    default:
      return state
  }
}

function error_msg(msg){
  return {type:ERROR_MSG,msg:msg}
}

function register_successful(data){
  return {type:REGISTER_SUCCESSFUL,data:data}
}

function login_successful(data){
  return {type:LOGIN_SUCCESSFUL,data:data}
}

export function register({username,pwd}){
  if(!username || !pwd){
    return error_msg('username and pwd is required!')
  }

  return dispatch=>{
    axios.post('/user/register',{username,pwd})
    .then(res=>{
      if(res.status === 200 && res.data.code===0){
        dispatch(register_successful({username,pwd}))
      }else{
        dispatch(error_msg(res.data.msg))
      }
    })
  }
}


export function login({username,pwd}){
  if(!username || !pwd){
    return error_msg('username and pwd is required!')
  }

  return dispatch=>{
    axios.post('/user/login',{username,pwd})
    .then(res=>{
      if(res.status === 200 && res.data.code===0){
        dispatch(login_successful(res.data))
      }else{
        dispatch(error_msg(res.data.msg))
      }
    })
  }
}