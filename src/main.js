import { createApp } from 'vue';
import App from './App.vue';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {

  apiKey: "AIzaSyD5gftpE7tNix4FH9H91fNZLcFRCTqaA6Q",

  authDomain: "pic-memo.firebaseapp.com",

  databaseURL: "https://pic-memo-default-rtdb.firebaseio.com",

  projectId: "pic-memo",

  storageBucket: "pic-memo.appspot.com",

  messagingSenderId: "1514427417",

  appId: "1:1514427417:web:59d16ff03d8f120eb08688"

};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app');
