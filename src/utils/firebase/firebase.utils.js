import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSAN5KgcpEDVzF4jt7q07YukPoxrD4Kaw",
  authDomain: "crwn-clothing-db-b2aed.firebaseapp.com",
  projectId: "crwn-clothing-db-b2aed",
  storageBucket: "crwn-clothing-db-b2aed.appspot.com",
  messagingSenderId: "597202598692",
  appId: "1:597202598692:web:bc3a9cf7161122a738d1b1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth) return;
    const useDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(useDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(useDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation,
            });
        } catch(error) { 
            console.log('error creating the user', error.message);
        }
    }

    return useDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => { 
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};