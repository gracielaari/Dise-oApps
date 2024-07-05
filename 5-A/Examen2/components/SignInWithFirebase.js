import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SignIn from './SignIn';

const SignInWithFirebase = ({ email, setEmail, password, setPassword }) => {
  const auth = getAuth();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
    } catch (error) {
      console.log('Authentication error:', error.message);
    }
  };

  return (
    <SignIn
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSignIn={handleSignIn}
    />
  );
};

export default SignInWithFirebase;
