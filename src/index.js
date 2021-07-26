import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from "react-redux"

import thunk from 'redux-thunk'
import {
  BrowserRouter,
  Route,
} from "react-router-dom"

import reducers from './reducer';
import './config';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Auth from '../src/component/auth/auth'
import Home from './pages/home/home'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
    <Auth></Auth>
    <Route path="/login" component={Login}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/register" component={Register}></Route>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)

reportWebVitals();
