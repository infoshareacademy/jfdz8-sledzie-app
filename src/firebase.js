import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAfEbAczuO9XB9CCaZdD72be2wQPsN63Uk",
  authDomain: "marvel-app-ea482.firebaseapp.com",
  databaseURL: "https://marvel-app-ea482.firebaseio.com",
  projectId: "marvel-app-ea482",
  storageBucket: "marvel-app-ea482.appspot.com",
  messagingSenderId: "626713612609"
};
const fb = firebase.initializeApp(config);

export const database = fb.database();
export const auth = firebase.auth


