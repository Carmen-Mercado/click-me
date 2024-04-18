const functions = require('firebase-functions');

exports.showBanner = functions.https.onRequest((request, response) => {
    response.send("Bienvenido a mi sitio Firebase!");
});
