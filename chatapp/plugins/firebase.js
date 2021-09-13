import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyDKnRovmtOFQymJ27IFA6aiFGWaZwGCMRU",
    authDomain: "chatapp-16a26.firebaseapp.com",
    projectId: "chatapp-16a26",
    storageBucket: "chatapp-16a26.appspot.com",
    messagingSenderId: "648579938856",
    appId: "1:648579938856:web:c0a6c7bc44f686c6e0531d"
  });
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    auth: Firebase.auth,
    firestore: Firebase.firestore,
  }
  inject('fb',$fb)
}