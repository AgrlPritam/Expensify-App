import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database();

database.ref().set({
    name: 'Pritam Agrawal',
    age: 25,
    issingle: false,
    location: {
        city: 'Bangalore',
        country: 'INDIA'
    }
}).then(() => {
    console.log('Data saved!!!');
}).catch((e) => {
    console.log('error:', e);
})

//database.ref().set('This is my data')

database.ref('age').set(27)
database.ref('location/city').set('Bhubaneswar')
//attributes
//  height
//  weight
database.ref('attributes').set({
    height: '180.34 cms',
    weight: '83 Kgs'
})
