import { initializeApp } from "firebase/app"
  import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
  import { getFirestore } from "firebase/firestore"
  
  const firebaseConfig = {
    apiKey: "AIzaSyAE3dOr3ON6OvtI2lNZR0SUm3eKuAlC_lg",
    authDomain: "blog-list-27ac6.firebaseapp.com",
    projectId: "blog-list-27ac6",
    storageBucket: "blog-list-27ac6.appspot.com",
    messagingSenderId: "862421192153",
    appId: "1:862421192153:web:4a5235e0e513e8e4fe5dc8"
  }
  
  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app)