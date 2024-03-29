
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAAVa0TVxqdUXvoGxCbr75uZ_BsKo1llXI",
    authDomain: "chat-app-5e16b.firebaseapp.com",
    projectId: "chat-app-5e16b",
    storageBucket: "chat-app-5e16b.appspot.com",
    messagingSenderId: "324552065117",
    appId: "1:324552065117:web:382fbc5847dde6692e8db4",
    measurementId: "G-MBYZTSN86J"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage ,app};

export default firebaseConfig;