import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import SignInWithFirebase from './SignInWithFirebase';
import SignUpWithFirebase from './SignUpWithFirebase';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <View style={styles.authContainer}>
      {isLogin ? (
        <SignInWithFirebase 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <SignUpWithFirebase
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
      <Text style={styles.toggleText} onPress={toggleAuthMode}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default AuthScreen;
