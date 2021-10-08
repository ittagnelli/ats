const COLLEZIONE = "ats-access-counter";

const firebaseConfig = {
    apiKey: "AIzaSyDZzdZnS1Bs6pI3eSLqtN_y2C7WpCxPHpM",
    authDomain: "ats-agnelli.firebaseapp.com",
    projectId: "ats-agnelli",
    storageBucket: "ats-agnelli.appspot.com",
    messagingSenderId: "280390716859",
    appId: "1:280390716859:web:10765d0f0b3fb6fa74089e"
};
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function log_access(type) {
    $.get( "https://ipapi.co/json/", function( data ) {
        var collezione = db.collection(COLLEZIONE);
        adesso = new Date();
        
        var MM = adesso.getUTCMonth() + 1; 
        var DD = adesso.getUTCDate();
        var YYYY = adesso.getUTCFullYear();

        collezione.doc(adesso.toISOString()).set({
                type: type,
                access: adesso.toISOString(),
                ip: data.ip, 
                city: data.city,
                year: YYYY,
                month: MM,
                day: DD
        });
    });
}


        


