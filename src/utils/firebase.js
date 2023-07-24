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


/*
export async function registerNewUser(user) {
  try {
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, user.uid), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function userExists(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  return docSnap.exists();
}

export async function updateUser(user) {
  console.log(user);
  try {
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, user.uid), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function fetchLinkData(uid) {
  const links = [];
    const q = query(collection(db, "links"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const link = { ...doc.data() };
    link.docId = doc.id;
    //console.log(doc.id, " => ", doc.data());
    console.log(link);
    links.push(link);
  });
  return links;
}

export async function insertNewLink(link) {
  try {
    const linksRef = collection(db, "links");
    const res = await addDoc(linksRef, link);
    return res;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function existsUsername(username) {
  const users = [];
  const q = query(collection(db, "users"), where("username", "==", username));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null;
}

export async function getUserPublicProfileInfo(uid) {
  const profileInfo = await getUserInfo(uid);
  const linksInfo = await fetchLinkData(uid);
  return {
    profile: profileInfo,
    links: linksInfo,
  };
}

export async function getUserProfilePhoto(usernamePhoto) {
  // Create a child reference
  const imagesRef = ref(storage, `images/${usernamePhoto}`);
  // imagesRef now points to 'images'
}

export async function setUserProfilePhoto(uid, file) {
  // Create a root reference
  const storage = getStorage();

  // Create a reference to 'mountains.jpg'
  //const mountainsRef = ref(storage, username);

  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = ref(storage, `images/${uid}`);

  // While the file names are the same, the references point to different files
  //mountainsRef.name === mountainImagesRef.name; // true
  //mountainsRef.fullPath === mountainImagesRef.fullPath; // false
  // 'file' comes from the Blob or File API
  const res = await uploadBytes(mountainImagesRef, file);
  console.log("file uploaded", res);
  return res;
}

export async function getProfilePhotoUrl(profilePicture) {
  const profileRef = ref(storage, profilePicture);
  console.log(profilePicture);

  // const url = await getDownloadURL(
    //ref(storage, "images/MBr3m7RbiWSlnskhZ94EZ9Vkh542")
  ); 
  const url = await getDownloadURL(profileRef);
  /* .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      console.log("url", url);

      // Or inserted into an <img> element
      const img = document.getElementById("myimg");
      img.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    }); *//*
  console.log({ url });
  return url;
}

export async function logout() {
  await auth.signOut();
}

export async function deleteLink(docId) {
  await deleteDoc(doc(db, "links", docId));
}

export async function updateLink(docId, link) {
  const res = await setDoc(doc(db, "links", docId), link);
  console.log("update link", docId, link, res);
}

*/