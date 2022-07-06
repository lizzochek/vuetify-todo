import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbuwzebpAu5-RL0KhYhVMj2-1uk5a2fqo',
  authDomain: 'vuetify-todo-377cd.firebaseapp.com',
  projectId: 'vuetify-todo-377cd',
  storageBucket: 'vuetify-todo-377cd.appspot.com',
  messagingSenderId: '439557712999',
  appId: '1:439557712999:web:535f3a9f56a75a4d43f8c2',
  measurementId: 'G-T4TF0611TK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const setItem = async (collection, params) => {
  const id = new Date().getTime().toString();

  await setDoc(doc(db, collection, id), params);
};

const getItem = async (collection, id) => {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
};

export { setItem, getItem };
