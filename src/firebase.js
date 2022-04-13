//import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAVEWN3dyWSmm0Ra0zOHArDdo4fL7BTJo",
  authDomain: "appointment-system-5bc0e.firebaseapp.com",
  projectId: "appointment-system-5bc0e",
  storageBucket: "appointment-system-5bc0e.appspot.com",
  messagingSenderId: "324510179853",
  appId: "1:324510179853:web:944726459a4abc77c02b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}
