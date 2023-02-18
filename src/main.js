import { createApp } from 'vue';
import App from './App.vue';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import  { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {

  apiKey: "AIzaSyD5gftpE7tNix4FH9H91fNZLcFRCTqaA6Q",

  authDomain: "pic-memo.firebaseapp.com",

  projectId: "pic-memo",

  storageBucket: "pic-memo.appspot.com",

  messagingSenderId: "1514427417",

  appId: "1:1514427417:web:59d16ff03d8f120eb08688"

};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
// export default storage;

createApp(App).mount('#app');
