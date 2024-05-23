// src/components/AuthPage.js
import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useAppContext } from '../context';
import './AuthPage.css';

function AuthPage() {
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          name: 'John',  // Placeholder values
          lastname: 'Doe',  // Placeholder values
          email: user.email,
          address: {
            city: 'City',
            street: 'Street',
            building: '123',
            flat: '45'
          }
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setUserData(userData);
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem('user');
        setUserData(null);
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, [setIsLoggedIn, setUserData]);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userData = {
        name: 'John',  // Placeholder values
        lastname: 'Doe',  // Placeholder values
        email: userCredential.user.email,
        address: {
          city: 'City',
          street: 'Street',
          building: '123',
          flat: '45'
        }
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUserData(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userData = {
        name: 'John',  // Placeholder values
        lastname: 'Doe',  // Placeholder values
        email: userCredential.user.email,
        address: {
          city: 'City',
          street: 'Street',
          building: '123',
          flat: '45'
        }
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setUserData(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      setUserData(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className='auth-page'>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userData.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
