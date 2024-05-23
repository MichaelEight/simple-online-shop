// src/components/AuthPage.js
import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Import Firestore methods
import { auth, db } from '../firebase';
import { useAppContext } from '../context';
import './AuthPage.css';

function AuthPage() {
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [buttonCooldown, setButtonCooldown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          localStorage.setItem('user', JSON.stringify(userData));
          setUserData(userData);
          setIsLoggedIn(true);
        }
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
      const user = userCredential.user;
      const userData = {
        name,
        lastname,
        email: user.email,
        address
      };
      await setDoc(doc(db, 'users', user.uid), userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setUserData(userData);
      setIsLoggedIn(true);
      setFeedback('Sign up successful!');
      setFeedbackColor('green');
    } catch (error) {
      setFeedback(`Error signing up: ${error.message}`);
      setFeedbackColor('red');
    }
    setButtonCooldown(true);
    setTimeout(() => setButtonCooldown(false), 2000);
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        localStorage.setItem('user', JSON.stringify(userData));
        setUserData(userData);
        setIsLoggedIn(true);
        setFeedback('Sign in successful!');
        setFeedbackColor('green');
      }
    } catch (error) {
      setFeedback(`Error signing in: ${error.message}`);
      setFeedbackColor('red');
    }
    setButtonCooldown(true);
    setTimeout(() => setButtonCooldown(false), 2000);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      setUserData(null);
      setIsLoggedIn(false);
      setFeedback('Sign out successful!');
      setFeedbackColor('green');
    } catch (error) {
      setFeedback(`Error signing out: ${error.message}`);
      setFeedbackColor('red');
    }
  };

  const isSignUpValid = email && password && name && lastname && address;
  const isSignInValid = email && password;

  return (
    <div className='auth-page'>
      {!isLoggedIn ? (
        <>
          <div className='auth-section'>
            <h2>Sign In</h2>
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
            <button onClick={handleSignIn} disabled={!isSignInValid || buttonCooldown}>Sign In</button>
            {feedback && <p className="feedback" style={{ color: feedbackColor }}>{feedback}</p>}
          </div>
          <div className='auth-section'>
            <h2>Sign Up</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
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
            <button onClick={handleSignUp} disabled={!isSignUpValid || buttonCooldown}>Sign Up</button>
            {feedback && <p className="feedback" style={{ color: feedbackColor }}>{feedback}</p>}
          </div>
        </>
      ) : (
        <div className='welcome-section'>
          <p>Welcome, {userData ? userData.email : ''}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
