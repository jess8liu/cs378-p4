import '../App.css';
import React, { useState } from 'react';
import { auth } from './config';
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import FavoriteFlowers from './favoriteflowers';

function Authentificate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Log in & out
  const login = () => {
    // Authenticate user first before signing in
    signInWithEmailAndPassword(auth, email, password).then(() => {
      // Successfully logged on
      setIsLoggedIn(true);
    }).catch((error) => alert('Signing in was not successful.'));
  }

  const logout = () => {
    signOut(auth).then(() => {
      // Successfully logged out
      setIsLoggedIn(false);
    }).catch((error) => alert('Signing out was not successful.'))
  }

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert('Account successfully created.');
    }).catch((error) => alert('Creating an account was not successful.'));
  }

  // Change email & password
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='MainContainer'>
      {!isLoggedIn ? (
        <>
          <h1>
            Hello! Please sign in.
          </h1>
          <div className='LogInContainer'>
            <div className='Input'>
              <div>
                <input className='LoginInfo' type="email" placeholder="Email" value={email} onChange={changeEmail}>
                </input>
              </div>
              <div>
                <input className='LoginInfo' type="password" placeholder="Password" value={password} onChange={changePassword}>
                </input>
              </div>
            </div>

            <div className='Buttons'>
              <div>
                <button className='Login' onClick={login}>
                  Login
                </button>
              </div>

              <div>
                <button className='Register' onClick={register}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>

        </>
      ) : (
        <></>
      )}

      {isLoggedIn ? (
        <>
          <div>
            Welcome, {auth.currentUser.email}!
          </div>

          <button className='Logout' onClick={logout}>
            Logout
          </button>

          <div>
            <FavoriteFlowers>
            </FavoriteFlowers>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Authentificate;