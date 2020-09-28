import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as firebase from 'firebase'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const firebaseConfig = {
  apiKey: 'AIzaSyDQ3we1HwId4S2oM3qIs9518LOLyweBtdU',
  authDomain: 'regexp-patterns.firebaseapp.com',
  databaseURL: 'https://regexp-patterns.firebaseio.com',
  projectId: 'regexp-patterns',
  storageBucket: 'regexp-patterns.appspot.com',
  messagingSenderId: '965264843923',
  appId: '1:965264843923:web:3b2ca058d47f0234109966'
}
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
