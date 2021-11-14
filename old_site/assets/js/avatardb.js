var MAX_STUDENTS = 15;

function get_4_students() {
    student = new Set();
    while (student.size < 4) {
        student.add(Math.floor(Math.random() * MAX_STUDENTS));
    }
    console.log(student);
    return Array.from(student);
}

var avatardb = [
    {
        img: "assets/img/team/avatar-apetroaie.png",
        nome: "ANTONIO APETROAIE",
        ruolo: "Customer Support",
        desc: "Un ragazzo molto sorridente che sarà lieto di accogliervi in negozio per risolvere i vostri problemi"
    },
    {
        img: "assets/img/team/avatar-bortoluzzi.png",
        nome: "LUCA BORTOLUZZI",
        ruolo: "Tutor",
        desc: "Non sai nulla? Anch'io ero come te, adesso se ti serve una mano basta chiedere."
    },
    {
        img: "assets/img/team/avatar-chindris.png",
        nome: "ALEXANDRU CHINDRIS",
        ruolo: "Software Assistant",
        desc: "Appassionato di programmazione, hardware troubleshooting e grafica.Saprà certamente aiutarti!!"
    },
    {
        img: "assets/img/team/avatar-garabello.png",
        nome: "MARCO GARABELLO",
        ruolo: "Software Assistant",
        desc: "Sempre disponibile per aiutare o chiarire qualunque dubbio nel mondo del software."
    },
    {
        img: "assets/img/team/avatar-laudani.png",
        nome: "SIMONE LAUDANI",
        ruolo: "Software Assistant",
        desc: "Motivato e sempre a disposizione. Mi piace vedere il lato positivo delle cose."
    },
    {
        img: "assets/img/team/avatar-lurgo.png",
        nome: "GIACOMO LURGO",
        ruolo: "Hardware Assistant",
        desc: "Abile smanettone, capace e affidabile."
    },
    {
        img: "assets/img/team/avatar-pomba.png",
        nome: "FEDERICO POMBA",
        ruolo: "Hardware Assistant",
        desc: "Il computer? Lo conosco come le mie tasche!"
    },
    {
        img: "assets/img/team/avatar-quijada.png",
        nome: "PIERPAOLO QUIJADA",
        ruolo: "Tutor",
        desc: "Preparato ed Appassionato. E' pronto a soddisfare ogni tua esigenza"
    },
    {
        img: "assets/img/team/avatar-ruggieri.png",
        nome: "DARIO RUGGIERI",
        ruolo: "Software Assistant",
        desc: "Dario è come te, pieno di domande. Ora però sarà pronto a darti una risposta!"
    },
    {
        img: "assets/img/team/avatar-sciannimanica.png",
        nome: "CHRISTIAN SCIANNIMANICA",
        ruolo: "Customer Support",
        desc: "Hai un problema col computer? Christian saprà aiutarti a trovare la soluzione"
    },
    {
        img: "assets/img/team/avatar-siracusa.png",
        nome: "MICHELE SIRACUSA",
        ruolo: "Hardware Assistant",
        desc: "Ci mette passione nel trovare la soluzione!"
    },
    {
        img: "assets/img/team/avatar-sola.png",
        nome: "MATTEO SOLA",
        ruolo: "Hardware Assistant",
        desc: "Parla poco ma agisce molto. Vieni a conoscerlo, non te ne pentirai!"
    },
    {
        img: "assets/img/team/avatar-solavagione.png",
        nome: "MATTEO SOLAVAGIONE",
        ruolo: "Software Assistant",
        desc: "Riflessivo e sempre pronto a trovare una soluzione al tuo problema."
    },
    {
        img: "assets/img/team/avatar-viteritti.png",
        nome: "WILLIAM VITERITTI",
        ruolo: "Hardware Assistant",
        desc: "Calmo, gentile e disponibile. Ti aiuterà a risolvere le tue problematiche HW."
    },
    {
        img: "assets/img/team/avatar-zaina.png",
        nome: "FRANCESCO ZAINA",
        ruolo: "Software Assistant",
        desc: "Non perdo tempo, sono molto disponibile e affidabile."
    },
];
