
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
    apiKey: '<Your api key here>',
    authDomain: '<Your auth Domain here>',
    databaseURL: '<Your databaseUrl here>',
    projectId: 'prueba-vuetify',
    storageBucket: '<Your storageBucket here>',
    messagingSenderId: '<Your messagingSenderId here>'
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
    // timestampsInSnapshots: true
});

export default {    
    db
}