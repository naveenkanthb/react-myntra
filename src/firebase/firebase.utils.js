import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaQ2DV0iCPNypH2zQI3aYW75Wsu_Ijf0E",
    authDomain: "navmyntra.firebaseapp.com",
    databaseURL: "https://navmyntra.firebaseio.com",
    projectId: "navmyntra",
    storageBucket: "navmyntra.appspot.com",
    messagingSenderId: "977603083065",
    appId: "1:977603083065:web:c49759941240b69abcc6e8",
    measurementId: "G-S4VVXME578"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
