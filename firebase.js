import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA_pS-EOht1fYwyk4qdWk3aV7f0ihP9YNw",
	authDomain: "signal-clone-5c4cc.firebaseapp.com",
	projectId: "signal-clone-5c4cc",
	storageBucket: "signal-clone-5c4cc.appspot.com",
	messagingSenderId: "128056463769",
	appId: "1:128056463769:web:10e7c3f565957f009f8308",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
