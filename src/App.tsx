import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const LoginSignupForm: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [showSignupBtn, setShowSignupBtn] = useState(true);

  const handleSignupBtnClick = (): void => {
    setIsExpanding(true);
    setTimeout(() => {
      setIsSignup(true);
      setIsExpanding(false);
    }, 500);
    setTimeout(() => {
      setShowSignupBtn(false);
    }, 0);
  };

  const handleShowLogin = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsSignup(false);


  };

  const handleShowSignup = (e: React.MouseEvent): void => {
    e.preventDefault();
    handleSignupBtnClick();

  };

  return (
    <div
      className="form-container"
      style={{
        transform: isExpanding ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      <AnimatePresence mode="wait">
        {!isSignup || showSignupBtn ? (
          <motion.div
            className="form"
            key="login"
            initial={{ rotateY: -180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <h2 className="form-title">Welcome Back</h2>
            <div className="input-group">
              <input type="email" id="login-email" placeholder=" " />
              <label htmlFor="login-email">Email</label>
            </div>
            <div className="input-group">
              <input type="password" id="login-password" placeholder=" " />
              <label htmlFor="login-password">Password</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
            <button className="btn btn-primary">Login</button>
            <div className="divider">
              <span>or login with</span>
            </div>
            <div className="social-login">
              <a href="#" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4285F4" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </a>
              <a href="#" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <a href="#" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <p className="switch-form">Don't have an account? <a href="#" onClick={handleShowSignup}>Sign up</a></p>
          </motion.div>

        ) : (

          <motion.div
            className="form"
            key="signup"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <h2 className="form-title">Create Account</h2>
            <div className="input-group">
              <input type="text" id="signup-name" placeholder=" " />
              <label htmlFor="signup-name">Full Name</label>
            </div>
            <div className="input-group">
              <input type="email" id="signup-email" placeholder=" " />
              <label htmlFor="signup-email">Email</label>
            </div>
            <div className="input-group">
              <input type="password" id="signup-password" placeholder=" " />
              <label htmlFor="signup-password">Password</label>
            </div>
            <div className="input-group">
              <input type="password" id="signup-confirm" placeholder=" " />
              <label htmlFor="signup-confirm">Confirm Password</label>
            </div>
            <button className="btn btn-primary">Create Account</button>
            <p className="switch-form">Already have an account? <a href="#" onClick={handleShowLogin}>Login</a></p>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default LoginSignupForm;