import React, { useState } from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../contexts/useAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Header from '../Header/Header';
import { useLocation, useHistory } from 'react-router-dom';

const Signin = () => {

    const { firebases } = useAuth();
    const [user, setUser, googleSignIn] = firebases;

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

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

            })
    }

    const auth = getAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <Header />
            <div className="signup-page">
                <div className="signup-area">
                    {
                        error && <div class="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    <div className="text-center mb-2">
                        <img width="200px" src={logo} alt="" />
                    </div>
                    <form onSubmit={handleSignIn} className="form text-center">
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><br /><br />
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /><br /><br />
                        <button className="btn btn-danger w-100">Sign In</button>
                        <div className="pt-3 link">
                            <Link to="/signup">Haven't Account?</Link>
                        </div>
                    </form>
                    <p>---------------------- or ----------------------</p>
                    <div className="text-center m-0">
                        <button onClick={signInGoogle} className="m-0 g-btn"><i class="fab fa-google"></i> Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;