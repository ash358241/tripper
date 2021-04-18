import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../images/search.png';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); 
     }

    // var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user)
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email, photoURL};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage);
        });
     }


    return (
    
    <div className="container py-5 my-xl-5">
			<div className="logo text-center">
				<Link to="/">
					<h1>Tripper</h1>
				</Link>
			</div>
			<div className="d-flex align-items-center justify-content-center pb-5 my-5">
				<div className="login-register login p-md-5 p-3">
					<h4 className="mb-5">Login With</h4>
					<button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
						<img src={googleLogo} alt="" style={{ maxWidth: "28px" }} />
						Continue with Google
					</button>
					<h5 className="mt-3">
						<span>Don’t have an account?</span>
						<Link to="/login">Create an account</Link>
					</h5>
				</div>
			</div>
		</div>
    );
};

export default Login;