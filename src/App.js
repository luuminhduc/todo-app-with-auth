import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import store from './redux/store';
import firebase from 'firebase';
import config from './firebase/config';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Header from './components/Header';

const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
  }

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
 
export default App;
