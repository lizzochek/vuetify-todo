import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// eslint-disable-next-line
import { doc, setDoc, onSnapshot, collection, query, where } from 'firebase/firestore';

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

const setItem = async (collectionName, params) => {
  const id = new Date().getTime().toString();

  await setDoc(doc(db, collectionName, id), params);
};

const getItems = (collectionName, field, comparable) => {
  const collectionItems = [];
  let q;
  if (field) {
    q = query(collection(db, collectionName), where(field, '==', comparable));
  } else {
    q = query(collection(db, collectionName));
  }
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((document) => {
      collectionItems.push(document.data());
    });
  });
  return collectionItems;
};

export { setItem, getItems };
