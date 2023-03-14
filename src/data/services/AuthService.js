import { 
    getFirestore, 
    collection, 
    setDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    doc,
    getDocs } from 'firebase/firestore';
import { getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    updateProfile } from 'firebase/auth';
import { app } from '../config/firebaseConfig';

const db = getFirestore(app);
const auth = getAuth();

export const addUser = async (userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    sendEmailVerification(auth.currentUser);
    await updateProfile(auth.currentUser, { displayName: userData.username });
    const docRef = await setDoc(
        doc(collection(db, 'users'), userCredential.user.uid),
        {   
            username: userData.username, 
            email: userData.email 
        });


    return userCredential
  } catch (error) {
    console.error('Error adding user: ', error);
    throw error;
  }
};

export const updateUser = async (userId, newData) => {
  try {
    const docRef = await updateDoc(doc(db, 'users', userId), newData);
    console.log('Document updated with ID: ', docRef.id);
  } catch (error) {
    console.error('Error updating user: ', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const docRef = await deleteDoc(doc(db, 'users', userId));
    console.log('Document deleted with ID: ', docRef.id);
  } catch (error) {
    console.error('Error deleting user: ', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting users: ', error);
    throw error;
  }
};