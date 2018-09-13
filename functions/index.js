const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log('I can see this!');
  console.log(functions.config().hello.there);
  response.send('Hello from Firebase!');
});
