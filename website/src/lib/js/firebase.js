import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from './store';
import { get } from 'svelte/store';

const COLLEZIONE = 'ats-access-counter';

export async function log_access(type) {
    const db = getFirestore(get(app));
    const response = await (await fetch("https://ipapi.co/json/")).json();
    const adesso = new Date();

    var MM = adesso.getUTCMonth() + 1;
    var DD = adesso.getUTCDate();
    var YYYY = adesso.getUTCFullYear();

    setDoc(doc(db, COLLEZIONE, adesso.toISOString()), {
        type: type,
        access: adesso.toISOString(),
        ip: response.ip,
        city: response.city,
        year: YYYY,
        month: MM,
        day: DD
    });
}





