  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyDTHCHn5q9pdbQmzajgFK6r0HjD5-VXEqU",
    authDomain: "temple-react-35b49.firebaseapp.com",
    projectId: "temple-react-35b49",
    storageBucket: "temple-react-35b49.firebasestorage.app",
    messagingSenderId: "1008580496362",
    appId: "1:1008580496362:web:233a14641194a36ab94093",
    measurementId: "G-HNJWDC5N2L"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);