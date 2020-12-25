import React from 'react';
import { Provider, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import store from './redux/store';
import firebase from 'firebase';
import config from './firebase/config';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import Header from './components/Header';
import Loading from './components/Loading';
import AlertList from './components/AlertList';

const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
}

const AuthIsLoaded = ({children}) => {
  const auth = useSelector(state => state.firebaseReducer.auth);
  if(!isLoaded(auth)) return <Loading status={true}/>
  return children;
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
       <AuthIsLoaded>
       <Header/>
       <AlertList/>
        <Loading/>
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
       </AuthIsLoaded>
      </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
 
export default App;
