import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faCommentDots, faPlus, faUserPlus, faShoppingCart, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';


// import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        phone: ''
    });

    // google sign-out;
    const handleSignOut = () => {

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


    return (


        <div className="sidebar d-flex flex-column justify-content-between position-fixed" style={{ height: "100vh" }}>

            <ul className="list-unstyled">
                <h3><Link to="/">Tripper</Link></h3>
                <div className="my-5">

                    <li>
                        <Link to="/service/:serviceId" className="sideBarlink">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="sideBarlink">
                            <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/postReview" className="sideBarlink">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                    
                </div>

                

            </ul>
            <div className="text-center my-5">
                <Link to="/" onClick={handleSignOut} className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span className="logoutBtn">Logout</span></Link>
            </div>
        </div>

    );
};

export default Sidebar;