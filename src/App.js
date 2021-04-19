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
        <Route path="/postService">
          <Services></Services>
        </Route>
        <Route path="/orders">
          <Orders></Orders>
        </Route>
        <Route path="/service/:serviceId">
          <Orders></Orders>
        </Route>
        <Route path="/serviceList" >
              <ServiceList></ServiceList>
            </Route>
            <Route path="/makeAdmin" >
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/allOrders" >
              <AllOrders></AllOrders>
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
