import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="col-md-10 offset-md-1">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light pt-3 navbarStyle">
                <h3>Tripper</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse font-weight-bold animate__animated animate__slideInRight" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white mr-5" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white mr-5" to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white mr-5" to="/">Review</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white mr-5" to="/">Contact</Link>                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white mr-5" to="/dashBoard">DashBoard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white mr-5" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white mr-5" to="/login"><img className="rounded-circle w-25" src={loggedInUser.photoURL} alt=""/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;