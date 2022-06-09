import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTeDvwqpmGmzQ_gGLPBNbPlYGPCg4OY5g",
    authDomain: "leave-db.firebaseapp.com",
    projectId: "leave-db",
    storageBucket: "leave-db.appspot.com",
    messagingSenderId: "655701553037",
    appId: "1:655701553037:web:a2c923341bc421707fd7c4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();
    if(!snapShot.exists) {
        const {displayName, Email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                Email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error ==>', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});//triger google pop up whenever we use googleAuthProvider();
export const SignInWithGoogle = () => auth.signInWithPopup(provider);//in reality???

export default firebase;