  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
  deleteObject
} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtyDit29VcfSxCRT66ojBYRCqLcLxAm20",
  authDomain: "otapp-df0c8.firebaseapp.com",
  projectId: "otapp-df0c8",
  storageBucket: "otapp-df0c8.appspot.com",
  messagingSenderId: "874364499091",
  appId: "1:874364499091:web:464959d42d04b96c848966",
  measurementId: "G-R1XDY4D5G7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();


export async function userExists(uid){
  console.log("buscando usuario");
  const docRef = doc(db, 'users', uid);
  const response = await getDoc(docRef);
  console.log(response);
  return response.exists();
}


export async function insertNewPlace(place) {
  try {
 
    const placesRef = collection(db, "places");
    const res = await addDoc(placesRef, place);
    return res;
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function updatePlace (place, id) {
  try {
    const placeRef = collection(db, "places");
    await setDoc(doc(placeRef, id), place);
  } catch (e) {
    console.log(e);
  }
}

export async function uploadImage (file, namePlace, index) {

   const imageName = namePlace.replace(" ", "-").toLowerCase() + index + '-' + file.lastModified + ".jpeg";
    
    const storageRef = ref(storage, 'images/'+imageName);
   
    const response = await uploadBytes(storageRef, file)
    console.log('finalizado Bite upload');
    
    return response;
}

export async function getImageUrl(path) {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (e) {
    return ''
  } 
}

export async function deleteImage (path) {
  const storageRef = ref(storage, path);
  console.log(storageRef);
  try {
    await deleteObject(storageRef);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getPlaces () {
      try {
        const placesRef = collection(db, 'places');
        const querySnapshot = await getDocs(placesRef);
        const documentosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        return documentosData;
      } catch (error) {
        console.error('Error al obtener documentos:', error);
      }
}

export async function deletePlace(id) {
  try {
    await deleteDoc(doc(db, "places", id));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}