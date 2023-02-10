import { initializeApp } from "firebase/app";
import{getFirestore,collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCISgyn1EVqUFzbuarScP5CSsMpePH7lzg",
  authDomain: "cineima.firebaseapp.com",
  projectId: "cineima",
  storageBucket: "cineima.appspot.com",
  messagingSenderId: "868423185675",
  appId: "1:868423185675:web:5f3a45f0586d421fb11e0e"
};

const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const moviesRef = collection(db,"movies")
export const reviewsRef = collection(db,"reviews")
export const usersRef = collection(db,"users")
export default app;