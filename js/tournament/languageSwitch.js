// Create a function to change
// the hash value of the page
document.addEventListener('DOMContentLoaded', () => {
$("switch-lang-it").hide();
});

function switchLanguage(lang) {
    location.hash = lang;
    location.reload();
    }

    // Define the language reload anchors
    var language = {
    it: {
        title: "Torneo di Ping Pong in VR a Trento",
        subtitle: "23 febbraio 2023 in Aula A101 (Povo 1 - Università di Trento) dalle 15:00",
        first_button: "Registrati subito",
        second_button: "Guardaci su Twitch",
        third_button: "Scopri di più",
        hi: "Ciao!",
        first_paragraph: "Siamo la Trento Virtual Reality Society e quest’anno stiamo organizzando un evento particolare: vi presentiamo il <b>primo torneo di Ping Pong 🏆🏓 in VR</b> a Trento!",
        second_paragraph: "Il gioco in questione è <a href='https://www.oculus.com/experiences/quest/1995434190525828/'>Eleven Table Tennis</a>, uno dei più gettonati nella Realtà Virtuale e conosciuto meglio come \“il simulatore di Ping Pong in VR per eccellenza.\”",
        third_paragraph: "Gli sviluppatori di Eleven Table Tennis, <a href='https://www.forfunlabs.com/'>For Fun Labs</a>, si sono pure offerti come nostri sponsor per questo evento!",
        fourth_paragraph: "Si giocherà in un <b>torneo frenetico a 32 partecipanti single-elimination alla meglio di tre game</b> con tanto di livestream su <a href='https://twitch.tv/trentovrsociety'>Twitch</a>.",
        noheadsetneeded: "Non serve alcun visore!",
        fifth_paragraph: "Li forniremo noi assieme alle racchette, cortesemente stampate dal <a href='https://fablab.unitn.it/'>FabLab</a> al fine di fornire un’esperienza ancora più autentica di Ping Pong.",
        sixth_paragraph: "<b>L’iscrizione al torneo è completamente gratuita.</b>",
        date_paragraph: "<b>📅 Data:</b> giovedì 23 febbraio 2023 dalle 15:00",
        location_paragraph: "<b>🗺 Location:</b> Aula A101 in Polo Ferrari - Povo 1 (Via Sommarive 9, 38123 TN)",
        interested: "Interessatǝ?",
        calltoaction_button: "Registrati al torneo",
        calltoaction_contact: "Hai dubbi e vuoi ulteriori informazioni? Contattaci su tutti i nostri social e seguici per gli ultimi aggiornamenti sul torneo!",
        footer_kazoo: "Un'attività di <a href='https://www.arcideltrentino.it/circoli/kazoo/'>Kazoo APS</a>"
    },
    en: {
        hi: "Hi!",
        title: "VR Table Tennis Tournament in Trento",
        subtitle: "23 February 2023 in Classroom A101 (Povo 1 - University of Trento) from 3:00 PM",
        first_button: "Register now",
        second_button: "Watch on Twitch",
        third_button: "Find out more",
        hi: "Hi!",
        first_paragraph: "We are the Trento Virtual Reality Society and this year we're running an out of the ordinary event: here's <b>the first VR Table Tennis tournament 🏆🏓</b> in Trento!",
        second_paragraph: "The game in question is <a href='https://www.oculus.com/experiences/quest/1995434190525828/'>Eleven Table Tennis</a>, one of the most popular Virtual Reality experiences and better known as \“the VR Ping Pong simulator par excellence.\”",
        third_paragraph: "The developers of Eleven Table Tennis, <a href='https://www.forfunlabs.com/'>For Fun Labs</a>, have also offered to be our sponsor for this event!",
        fourth_paragraph: "The event will be a <b>fast-paced 32-player single-elimination best-of-three-game tournament</b> complete with a livestream on <a href='https://twitch.tv/trentovrsociety'>Twitch</a>.",
        noheadsetneeded: "No VR headset needed!",
        fifth_paragraph: "We will provide them together with the paddles, kindly printed by the <a href='https://fablab.unitn.it/'>FabLab</a> in order to provide an even more authentic Table Tennis experience.",
        sixth_paragraph: "<b>Registration for the tournament is completely free.</b>",
        date_paragraph: "<b>📅 Date:</b> Thursday 23 February 2023 from 3:00 PM",
        location_paragraph: "<b>🗺 Location:</b> Classroom A101 in Polo Ferrari - Povo 1 (Via Sommarive 9, 38123 TN)",
        interested: "Interested?",
        calltoaction_button: "Register for the tournament",
        calltoaction_contact: "Want more info? Contact us on all our social media and follow us for the latest updates on the tournament!",
        footer_kazoo: "An activity of <a href='https://www.arcideltrentino.it/circoli/kazoo/'>Kazoo APS</a>"
    },
    };

    // Check if a hash value exists in the URL
    if (window.location.hash) {

    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#it") {
        $("#switch-lang-it").hide();

        lang_hi.innerHTML = language.it.hi;
        lang_title.innerHTML = language.it.title;
        lang_subtitle.innerHTML = language.it.subtitle;
        lang_first_button.innerHTML = language.it.first_button;
        lang_second_button.innerHTML = language.it.second_button;
        lang_third_button.innerHTML = language.it.third_button;

        lang_first_paragraph.innerHTML = language.it.first_paragraph;
        lang_second_paragraph.innerHTML = language.it.second_paragraph;
        lang_third_paragraph.innerHTML = language.it.third_paragraph;
        lang_fourth_paragraph.innerHTML = language.it.fourth_paragraph;
        lang_noheadsetneeded.innerHTML = language.it.noheadsetneeded;
        lang_fifth_paragraph.innerHTML = language.it.fifth_paragraph;
        lang_sixth_paragraph.innerHTML = language.it.sixth_paragraph;
        lang_date_paragraph.innerHTML = language.it.date_paragraph;
        lang_location_paragraph.innerHTML = language.it.location_paragraph;
        lang_interested.innerHTML = language.it.interested;
        lang_calltoaction_button.innerHTML = language.it.calltoaction_button;
        lang_calltoaction_contact.innerHTML = language.it.calltoaction_contact;

        lang_footer_kazoo.innerHTML = language.it.footer_kazoo;
    }
    else if (window.location.hash == "#en") {
        $("#switch-lang-en").hide();

        lang_hi.innerHTML = language.en.hi;
        lang_title.innerHTML = language.en.title;
        lang_subtitle.innerHTML = language.en.subtitle;
        lang_first_button.innerHTML = language.en.first_button;
        lang_second_button.innerHTML = language.en.second_button;
        lang_third_button.innerHTML = language.en.third_button;

        lang_first_paragraph.innerHTML = language.en.first_paragraph;
        lang_second_paragraph.innerHTML = language.en.second_paragraph;
        lang_third_paragraph.innerHTML = language.en.third_paragraph;
        lang_fourth_paragraph.innerHTML = language.en.fourth_paragraph;
        lang_noheadsetneeded.innerHTML = language.en.noheadsetneeded;
        lang_fifth_paragraph.innerHTML = language.en.fifth_paragraph;
        lang_sixth_paragraph.innerHTML = language.en.sixth_paragraph;
        lang_date_paragraph.innerHTML = language.en.date_paragraph;
        lang_location_paragraph.innerHTML = language.en.location_paragraph;
        lang_interested.innerHTML = language.en.interested;
        lang_calltoaction_button.innerHTML = language.en.calltoaction_button;
        lang_calltoaction_contact.innerHTML = language.en.calltoaction_contact;

        lang_footer_kazoo.innerHTML = language.en.footer_kazoo;
    }
    } else {
        $("#switch-lang-it").hide();
    }