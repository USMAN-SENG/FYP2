import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
//onAuthStateChanged is used to listen to login and logout
import { getFirestore , collection, addDoc, doc, setDoc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAAVEWN3dyWSmm0Ra0zOHArDdo4fL7BTJo",
	authDomain: "appointment-system-5bc0e.firebaseapp.com",
	projectId: "appointment-system-5bc0e",
	storageBucket: "appointment-system-5bc0e.appspot.com",
	messagingSenderId: "324510179853",
	appId: "1:324510179853:web:944726459a4abc77c02b44",
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

// Custom Hook
// will use onAuthStateChanged to listen to  login and log out
//will return the current user informatiom
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub; // stop listning
	}, []);

	return currentUser;
}

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const usersColRef = collection(db,'users');

let arrayTest= [];
let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
arrayTest.push(car);

let objectWithArray = {
	array: arrayTest
}
//can't send an array, have to be an object
// we have to do a nested object 

export function addTestArray() {
	return addDoc(usersColRef,objectWithArray);
}