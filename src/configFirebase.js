
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

db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

export default {    
    db
}