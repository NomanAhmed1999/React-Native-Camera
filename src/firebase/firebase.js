import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, signInWithPopup  } from "firebase/auth";



const firebaseConfig = initializeApp({  
apiKey: "AIzaSyDFHEcw2cU2xGf7WiUbBZWaqVnkHwYZRU4",
authDomain: "testing9-9.firebaseapp.com",
projectId: "testing9-9",
storageBucket: "testing9-9.appspot.com",
messagingSenderId: "216863536049",
appId: "1:216863536049:web:37cb96ab77a6a2ee378390",
measurementId: "G-P8BK259GW9"});


const provider = new FacebookAuthProvider();
const auth = getAuth();

export{
provider,
signInWithPopup,
auth,
    
}






// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// import { getFirestore,getDocs, getDoc, Timestamp, collection, addDoc, doc, setDoc, query, where, onSnapshot, updateDoc } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL   } from "firebase/storage";


// const firebaseConfig = initializeApp({
//     apiKey: "AIzaSyAtoujqALt3rc5o40vXkruaN0VOTLZNiXY",
//     authDomain: "food-delivery-react-1999.firebaseapp.com",
//     projectId: "food-delivery-react-1999",
//     storageBucket: "food-delivery-react-1999.appspot.com",
//     messagingSenderId: "424075135556",
//     appId: "1:424075135556:web:a0bb9a4a410e65d229ca11",
//     measurementId: "G-VHPB9LTJS7"
//   });

//   const auth = getAuth();
//   const db = getFirestore();
//   const storage = getStorage();

//   export{
//       auth,
//       createUserWithEmailAndPassword,
//       signInWithEmailAndPassword,
//       onAuthStateChanged,
//       signOut,
//       sendPasswordResetEmail,


//       db,
//       collection,
//       addDoc,
//       doc,
//       setDoc,
//       query,
//       where,
//       getDocs,
//       getDoc,
//       onSnapshot,
//       updateDoc,
//       Timestamp,



//     storage,
//     ref,
//     uploadBytes,
//     getDownloadURL,
//   }