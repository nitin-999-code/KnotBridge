import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { FaHeartbeat } from 'react-icons/fa';
import './SignInForm.css';

const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);
    return (
        <div className="auth-page-wrapper">
            <div className="auth-card">
                <div className="auth-header text-center">
                    <Link to="/" className="auth-logo">
                        <FaHeartbeat className="auth-logo-icon" /> <span>MediBook</span>
                    </Link>
                </div>
                
                <div className="auth-body">
                    {isSignUp ? (
                        <SignUp setSignUp={setSignUp} />
                    ) : (
                        <SignIn />
                    )}
                </div>

                <div className="auth-footer text-center mt-4">
                    {isSignUp ? (
                        <p>Already have an account? <button className="auth-link-btn" onClick={() => setSignUp(false)}>Sign In</button></p>
                    ) : (
                        <p>Don't have an account? <button className="auth-link-btn" onClick={() => setSignUp(true)}>Sign up</button></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignInForm;