// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyBNVppPi-jc5QPa-4CooBjRxWxdj7RelwU',
	authDomain: 'mainpage-48d70.firebaseapp.com',
	projectId: 'mainpage-48d70',
	storageBucket: 'mainpage-48d70.appspot.com',
	messagingSenderId: '712960902309',
	appId: '1:712960902309:web:160d59870e15469a8f794c',
	measurementId: 'G-X055KV7W0Z',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
