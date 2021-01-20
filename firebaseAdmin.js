
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

export const verifiedToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL:""
            
          });
    }
    return admin.auth().verifiedToken(token).catch((error => {
        throw error
    }))
}


