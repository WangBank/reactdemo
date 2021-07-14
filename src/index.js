import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './index.redux'
import {Provider} from "react-redux"
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))
function qlm(){
  return <h2>qlm</h2>
}

function xpt(){
  return <h2>xpt</h2>
}

class Test extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h2>404</h2>
    )
  }
}

  ReactDOM.render((
      <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <ul>
            <li>
              <Link to='/'>wz</Link>
            </li>
            <li>
              <Link to='/qlm'>qlm</Link>
            </li>
            <li>
              <Link to='/xpt'>xpt</Link>
            </li>
          </ul>
          <Switch>
          <Route path='/' exact component={App}></Route>
          <Route path='/qlm' component={qlm}></Route>
          <Route path='/xpt' component={xpt}></Route>
          <Route path='/:location' component={Test}></Route>
          </Switch>
         
      </div>
      </BrowserRouter>
     
    </Provider> 
    </React.StrictMode>
  ) ,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
