// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBhSD3q4_ISLJXcjtw5iI_hVwzzjIrb1zI',
  authDomain: 'stas-dev-kz.firebaseapp.com',
  databaseURL: 'https://stas-dev-kz-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

export const db = firebaseApp.database();
export default firebaseApp;
