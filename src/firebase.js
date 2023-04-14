import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDQTzAf9wZ1d6lbYVQpPwqpkrvH2ZLTbII',
  authDomain: 'slack-clone-f24b7.firebaseapp.com',
  projectId: 'slack-clone-f24b7',
  storageBucket: 'slack-clone-f24b7.appspot.com',
  messagingSenderId: '849213584895',
  appId: '1:849213584895:web:f6fbd0b36add4910c0a3ca',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
