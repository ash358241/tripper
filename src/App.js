import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllOrders from './components/AllOrders/AllOrders';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ServiceList from './components/ManageOrder/ServiceList';
import Orders from './components/Orders/Orders';
import PostReview from './components/PostReview/PostReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


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
        <PrivateRoute path="/dashBoard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/postReview">
          <PostReview></PostReview>
        </Route>
        <PrivateRoute path="/postService">
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute> 
        <PrivateRoute path="/service/:serviceId">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/serviceList" >
              <ServiceList></ServiceList>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin" >
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/allOrders" >
              <AllOrders></AllOrders>
            </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
