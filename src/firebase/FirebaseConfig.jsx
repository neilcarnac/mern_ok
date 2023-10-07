import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpx4qEjlMTwvKQ2it1I_y6irJyDb40fuw",
  authDomain: "mernecommerce-1a236.firebaseapp.com",
  projectId: "mernecommerce-1a236",
  storageBucket: "mernecommerce-1a236.appspot.com",
  messagingSenderId: "701235994385",
  appId: "1:701235994385:web:1f556c3b08e60fbd6ab6b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB,auth } ;

