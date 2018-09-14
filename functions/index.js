const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

console.log('this runs no matter what!');
console.log('hello from the other side');

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log('I can see this!');
  console.log(functions.config().hello.there);
  response.send('Hello from Firebase!');
});


exports.postData = functions.https.onRequest((req, res) => {
  console.log(req.body);
});