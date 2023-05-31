import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyClgIMvNLtgMIQbv3fH-9deop2oQQjFTvA",
    authDomain: "sistema-868bf.firebaseapp.com",
    projectId: "sistema-868bf",
    storageBucket: "sistema-868bf.appspot.com",
    messagingSenderId: "277300287722",
    appId: "1:277300287722:web:d2cf08cef18b70d8e21f93",
    measurementId: "G-K51GCVF9YF"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage }