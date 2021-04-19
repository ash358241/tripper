import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faCommentDots, faPlus, faUserPlus, faShoppingCart, faMoneyCheckAlt, faUserCog, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';


// import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);
    // const [isUser, setIsUser] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/isAdmin", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data)
            // if(data){
            //     setIsUser(false);
            // }
        })
        
    }, [])

   

    
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        phone: ''
    });

    // google sign-out;
    const handleSignOut = () => {

        setIsAdmin(false);

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signOutUser);
                setLoggedInUser({});
                console.log(res);
            })

            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }


    console.log(isAdmin);


    return (


        <div className="sidebar d-flex flex-column justify-content-between " style={{ height: "100vh" }}>

            <ul className="list-unstyled">
                <h3><Link to="/">Tripper</Link></h3>
                <div className="my-5">

                     {/* {
                         isUser && 
                            
                         
                     } */}

                       

                   {
                       isAdmin ?

                       
                           <div>

                            <li>
                            <Link to="/allOrders" className="sideBarlink">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Order List</span>
                        </Link>
                            </li>

                            <li>
                            <Link to="/postService" className="sideBarlink">
                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span>
                        </Link>
                            </li>

                            <li>
                            <Link to="/makeAdmin" className="sideBarlink">
                        <FontAwesomeIcon icon={faUserPlus} />  <span>Make Admin</span>
                        </Link>
                            </li>

                            <li>
                        <Link to="/serviceList" className="sideBarlink">
                            <FontAwesomeIcon icon={faList} /> <span>Manage Services</span>
                        </Link>
                    </li>
                           </div>

                           :

                           <div>
                   <li>
                      <Link to="/service/:serviceId" className="sideBarlink">
                          <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                      </Link>
                  </li>

                  <li>
                      <Link to="/postReview" className="sideBarlink">
                          <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                      </Link>
                      </li>
                </div>

                   }

                   

                   
                    
                </div>

                

            </ul>
            <div className="text-center my-5">
                <Link to="/" onClick={handleSignOut} className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span className="logoutBtn">Logout</span></Link>
            </div>
        </div>

    );
};

export default Sidebar;