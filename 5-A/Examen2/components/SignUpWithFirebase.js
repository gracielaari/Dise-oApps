import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SignUp from './SignUp';

const SignUpWithFirebase = ({ email, setEmail, password, setPassword }) => {
  const auth = getAuth();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully');
    } catch (error) {
      console.log('Authentication error:', error.message);
    }
  };

  return (
    <SignUp
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUpWithFirebase;
