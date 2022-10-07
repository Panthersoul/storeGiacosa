import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH-PlajbPsZMaJXMJh4qOULrayd9qnBBg",
  authDomain: "coderhouse-ecommerce-fd0fa.firebaseapp.com",
  projectId: "coderhouse-ecommerce-fd0fa",
  storageBucket: "coderhouse-ecommerce-fd0fa.appspot.com",
  messagingSenderId: "945126862781",
  appId: "1:945126862781:web:2a5a960f5391c2e0a06cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
