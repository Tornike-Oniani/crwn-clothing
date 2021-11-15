import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAZBcZyO0FiNdE9RX67bDJyvO2nw5AAdsI',
  authDomain: 'crown-db-27233.firebaseapp.com',
  projectId: 'crown-db-27233',
  storageBucket: 'crown-db-27233.appspot.com',
  messagingSenderId: '305334351669',
  appId: '1:305334351669:web:320f15397be09b5dc77e7c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
