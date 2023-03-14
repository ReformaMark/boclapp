import { getFirestore, collection, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { app } from '../config/firebaseConfig';
import { async } from '@firebase/util';

const db = getFirestore(app);
const auth = getAuth();

export const addBook = async (uId, book) => {
    try{
        const docRef = await addDoc(collection(db, `users/${uId}/bookShelves`), { username: userData.username, email: userData.email });
    }
    catch (error) {

    }
}