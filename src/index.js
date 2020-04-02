import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navbar.scss'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import App from './App.jsx';

import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers/admin'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*PAGE*/
const smallMenuBtn = document.querySelector(".small-menu-btn");
const menuIcons = document.querySelectorAll(".menu-icon");
const smallMenu = document.querySelector(".small-menu");

smallMenuBtn.addEventListener("click", ()=>{
    for(let i = 0;i<menuIcons.length;i++){
        menuIcons[i].classList.toggle('active-menu-icon')        
    }
    smallMenu.classList.toggle('small-menu-active')
})