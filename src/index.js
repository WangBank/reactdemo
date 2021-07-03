import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {counter,addPerson,leavePerson,addPersonAsync} from './index.redux'

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))



function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} addPerson={addPerson} leavePerson={leavePerson} addPersonAsync={addPersonAsync}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render()
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
