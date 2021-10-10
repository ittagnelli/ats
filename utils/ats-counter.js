const admin = require('firebase-admin');
const serviceAccount = require('./ats-agnelli.json');


async function get_counters() {
    var home_all_counter = 0;
    var home_unique_counter = new Set();
    var email_all_counter = 0;
    var email_unique_counter = new Set();

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    const db = admin.firestore();    
    const snapshot = await db.collection('ats-access-counter').get();
    
    snapshot.forEach((doc) => {
        var access = doc.data();
        if (access.type == "home") {
            home_all_counter++;
            home_unique_counter.add(access.ip);
        } else {
            email_all_counter++;
            email_unique_counter.add(access.ip);
        }
    });
    console.log("========= Accessi ATS =========");
    console.log("Accesso Totali a Home:", home_all_counter);
    console.log("IP Access unici a Home:", home_unique_counter.size);
    console.log("===============================");
    console.log("Accesso Totali a Email:", email_all_counter);
    console.log("IP Access unici a Email:", email_unique_counter.size);
    console.log("===============================");
}

get_counters();