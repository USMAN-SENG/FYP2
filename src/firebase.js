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
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	setDoc,
} from "firebase/firestore";
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

const usersColRef = collection(db, "users");

let arrayTest = [];
let car = {
	color: "red",
	type: "cabrio",
	registration: new Date("2016-05-02"),
	capacity: 2,
};
arrayTest.push(car);

let objectWithArray = {
	array: arrayTest,
};

const EventObjInArr = [
  {
    event_id: 1,
    title: "Event 1",
    start: new Date("2021 5 2 9:30"),
    end: new Date("2021 5 2 10:30")
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date("2021 5 4 10:00"),
    end: new Date("2021 5 4 11:00")
  },
  {
    event_id: 3,
    title: "Event 3",
    start: new Date("2021 4 27 09:00"),
    end: new Date("2021 4 28 10:00")
  },
  {
    event_id: 4,
    title: "Event 4",
    start: new Date("2021 5 4 9:00"),
    end: new Date("2021 5 4 10:36")
  },
  {
    event_id: 5,
    title: "Event 5",
    start: new Date("2021 5 1 10:00"),
    end: new Date("2021 5 18 11:00")
  },
  {
    event_id: 6,
    title: "Event 6",
    start: new Date("2021 5 2 11:00"),
    end: new Date("2021 5 2 12:00")
  },
  {
    event_id: 7,
    title: "Event 7",
    start: new Date("2021 5 1 12:00"),
    end: new Date("2021 5 1 13:00")
  },
  {
    event_id: 8,
    title: "Event 8",
    start: new Date("2021 5 1 13:00"),
    end: new Date("2021 5 1 14:00")
  },
  {
    event_id: 9,
    title: "Event 11",
    start: new Date("2021 5 5 16:00"),
    end: new Date("2021 5 5 17:00")
  },
  {
    event_id: 10,
    title: "Event 9",
    start: new Date("2021 5 6  15:00"),
    end: new Date("2021 5 6 16:00")
  },
  {
    event_id: 11,
    title: "Event 10",
    start: new Date("2021 5 6 14:00"),
    end: new Date("2021 5 6 15:00")
  }
];

let objectWithArray2 = {
	arrayTest: EventObjInArr,
};
//can't send an array, have to be an object
// we have to do a nested object
// no need for nested object , when you create object with array inside it , it will only send the array 
export function addTestArray() {
	return addDoc(usersColRef, objectWithArray2); // addDoc will create random id
}

