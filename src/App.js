import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import firebase from "firebase";
import Router from "./Router";
import reducers from "./components/reducers";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAR5QTesgC3jK9ACuukI-hz3eh9golCPZk",
      authDomain: "manager-rn-1d0db.firebaseapp.com",
      databaseURL: "https://manager-rn-1d0db.firebaseio.com",
      projectId: "manager-rn-1d0db",
      storageBucket: "manager-rn-1d0db.appspot.com",
      messagingSenderId: "631569029644"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
