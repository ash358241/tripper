import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PostReview from './components/PostReview/PostReview';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/postReview">
          <PostReview></PostReview>
        </Route>
        <Route path="/postService">
          <Services></Services>
        </Route>
        <Route path="/orders">
          <Orders></Orders>
        </Route>
        <Route path="/service/:serviceId">
          <Orders></Orders>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
