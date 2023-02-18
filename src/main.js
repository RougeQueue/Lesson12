import { createApp } from 'vue';
import App from './App.vue';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import  { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {

  apiKey: "非公開",

  authDomain: "非公開",

  projectId: "非公開",

  storageBucket: "非公開",

  messagingSenderId: "非公開",

  appId: "非公開"

};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
// export default storage;

createApp(App).mount('#app');
