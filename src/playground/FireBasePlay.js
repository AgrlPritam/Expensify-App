import * as firebase from 'firebase'

//************Won't without Database details**************//
firebase.initializeApp(firebaseConfig)

const database = firebase.database();

//Setting data
// database.ref().set({
//     name: 'Pritam Agrawal',
//     age: 25,
//     issingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'XYZ',
//     },
//     location: {
//         city: 'Bangalore',
//         country: 'INDIA'
//     }
// }).then(() => {
//     console.log('Data saved!!!');
// }).catch((e) => {
//     console.log('error:', e);
// })

// database.ref('age').set(27)
// database.ref('location/city').set('Bhubaneswar')

// database.ref('attributes').set({
//     height: '180.34 cms',
//     weight: '83 Kgs'
// }).then(() => {
//     console.log('Second set call worked!');
// }).catch((e) => {
//     console.log('Things didnt work for second error', e);
// })

// database.ref().update({
//     name: 'Pritam Pratik Agrawal',
//     age: 26,
//     location: {             //This syntax will only assign city object inside location and remove the country object which was previously created
//         city: 'Pune'        //To keep country as it is and only update city, we can use 'location/city': 'Pune'
//     }
// })
// database.ref().remove().then(() => {
//     console.log('Data removed');
// }).catch((e) => {
//     console.log('Did not remove data',e);
// })

//fetching data only once, if data is changed later we won't be notified
// database.ref()      //ref('location') --> fetches both location attributes, ref('location/city') --> fetches city from location object
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching Data', e);
//     })

//fetching data in realtime i.e. if data is overwritten we will be notified
// database.ref() 
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());        //Here promises isn't used as promises only runs once after return a response or reject condition, but we need this callback to run each time data changes
//     })

//Subscribing on off scenario for notifcation of new data
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e);
// })
// setTimeout(() => {
//     database.ref('age').set(22)
// }, 3500)
// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)
// setTimeout(() => {
//     database.ref('age').set(21)     //Here data will change in database but no notification will be sent as subscription is already disconnected
// })

//Practice:
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Using List based data:
// Firebase doesn't store data in array format, e.g
// const notes = [{
//     id: '12',
//     title: 'First One',
//     body: 'This is note 1'
// },{
//     id: '65fdg',
//     title: 'Second One',
//     body: 'This is note 2'
// }]
// database.ref('notes').set(notes)  //for above this will store data under general id of 0, 1 which aren't array type data

//To store array type data:
// database.ref('notes').push({
//                 title: 'Second Note on topics!',
//                 body: 'MERN - Mongo, Express, React, Node'
// })

// database.ref('notes/-MHWjNDvL7_Zxn11WLxm').update({
//     body: 'Eat food'
// })