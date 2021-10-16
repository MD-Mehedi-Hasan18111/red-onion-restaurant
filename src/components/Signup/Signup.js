import React, { useState } from 'react';
import './Signup.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import initializeAuthentication from '../../Firebase/firebase.init';
import Header from '../Header/Header';
import { useLocation, useHistory } from 'react-router-dom';

initializeAuthentication();

const Signup = () => {

    const { firebases } = useAuth();
    const [user, setUser, googleSignIn] = firebases;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const signInGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccess(true);
                updateName();
            })
            .catch(error => {
                setSuccess(false);
                setError(error.message);
            })
    }

    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(res => {

            })
            .catch(error => {
                setError(error.message);
            })
    }

    console.log(user);

    return (
        <div>
            <Header />
            <div className="signup-page">
                <div className="signup-area">
                    {
                        error ? <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : ''
                    }
                    {
                        success && <div className="alert alert-success" role="alert">
                            User sign up successfully! Now user can sign in.
                        </div>
                    }
                    <div className="text-center mb-2">
                        <img width="200px" src={logo} alt="" />
                    </div>
                    <form onSubmit={createUser} className="form text-center">
                        <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" required /><br /><br />
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required /><br /><br />
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required /><br /><br />
                        <button className="btn btn-danger w-100">Sign Up</button>
                        <div className="pt-3 link">
                            <Link to="/signin">Already have an account?</Link>
                        </div>
                    </form>
                    <p>---------------------- or ----------------------</p>
                    <div className="text-center m-0">
                        <button onClick={signInGoogle} className="m-0 g-btn"><i className="fab fa-google"></i> Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;