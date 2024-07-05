import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View, Text, Button } from 'react-native';
import { initializeApp } from 'firebase/app';

import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import AuthScreen from './components/AuthScreen';

const firebaseConfig = {
  apiKey: "AIzaSyBges9-ghptPJJLNvysa19_gAcZoUA565U",
  authDomain: "logfire-c14bc.firebaseapp.com",
  projectId: "logfire-c14bc",
  storageBucket: "logfire-c14bc.appspot.com",
  messagingSenderId: "1021323241221",
  appId: "1:1021323241221:web:7634486200bcb51714f96c",
  measurementId: "G-D3WRK6N4JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const AuthenticatedScreen = ({ user, handleSignOut }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title='Log Out' onPress={handleSignOut} color='#e74c3c' />
    </View>
  );
};

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOut(auth);
        console.log('User logged out successfully');
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully');
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully');
        }
      }
    } catch (error) {
      console.log('Authentication error:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {user ? (
          <AuthenticatedScreen user={user} handleSignOut={handleAuthentication} />
        ) : (
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        )}
        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
