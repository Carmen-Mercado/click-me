const functions = require('firebase-functions');

exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;
    res.send(`Hello from Firebase! You sent: ${original}`);
});
