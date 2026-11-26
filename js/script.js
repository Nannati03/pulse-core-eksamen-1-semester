"use strict";


/////////STUDIERABAT SEKTION/////////////////////////

// Finder knappen og dialogboksen i HTML//
const studierabatKnap = document.getElementById("studierabat-knap");
const studierabatMenu = document.getElementById("studierabat-menu");
const lukStudierabat = document.getElementById("luk-studierabat");

// Åbner boksen ved klik på studierabat-knappen//
studierabatKnap.addEventListener("click", () => {
    studierabatMenu.showModal();
});

// Luk boksen ved klik på krydset//
lukStudierabat.addEventListener("click", () => {
    studierabatMenu.close();
});




/////////////UR-KARRUSEL/////////////////////////////////

// Finder billeder, pile og farveknapper i HTML
const urVenstre = document.getElementById("ur-billede-venstre");
const urHoejre = document.getElementById("ur-billede-hoejre");

const urForrige = document.getElementById("ur-forrige");
const urNaeste = document.getElementById("ur-naeste");

const farveKnapper = document.querySelectorAll(".ur-farve");

// Billednumrene på hvert slide
const urSlides = [
    [1, 2],
    [3, 4],
    [4, 5]
];

// Karrusellen starter med sort og første slide
let valgtFarve = "sort";
let aktueltSlide = 0;

// Viser billederne og markerer den valgte farve (${...} indsætter en variabels værdi i teksten)
function opdaterKarrusel() {
    const venstreNummer = urSlides[aktueltSlide][0];
    const hoejreNummer = urSlides[aktueltSlide][1];

     urVenstre.src =
        `img/${valgtFarve}-ur-${venstreNummer}.svg`;

    urHoejre.src =
        `img/${valgtFarve}-ur-${hoejreNummer}.svg`;

    urVenstre.alt =
        `Pulse Core i ${valgtFarve} - billede ${venstreNummer}`;

    urHoejre.alt =
        `Pulse Core i ${valgtFarve} - billede ${hoejreNummer}`;

    farveKnapper.forEach((knap) => {
        knap.classList.toggle(
            "valgt",
            knap.dataset.farve === valgtFarve
        );
    });
}

// Næste slide
urNaeste.addEventListener("click", () => {
    aktueltSlide = aktueltSlide + 1;

    // Efter sidste slide starter vi forfra
    if (aktueltSlide >= urSlides.length) {
        aktueltSlide = 0;
    }

    opdaterKarrusel();
});

// Forrige slide
urForrige.addEventListener("click", () => {
    aktueltSlide = aktueltSlide - 1;

    // Før første slide går vi til det sidste
    if (aktueltSlide < 0) {
        aktueltSlide = urSlides.length - 1;
    }

    opdaterKarrusel();
});

// Skifter urfarve og vender tilbage til første slide
farveKnapper.forEach((knap) => {
    knap.addEventListener("click", () => {
        valgtFarve = knap.dataset.farve;
        aktueltSlide = 0;

        opdaterKarrusel();
    });
});

// Viser starttilstanden
opdaterKarrusel();


////////// ================= Vendbare funktionskort =================//////////////////
// Finder de fire kort//
const funktionsKort = document.querySelectorAll(".funktion-kort");

// Tilføjer en klikfunktion til hvert kort//
funktionsKort.forEach((kort)=>{
    kort.addEventListener("click", ()=>{
        kort.classList.toggle("vendt");
    });
});


////////// ================= Trustpilot =================//////////////////

const anmeldelser = [{
    antalStjerner: 5,
    overskrift: "God kvalitet",
    beskrivelse: "Produktet var god kvalitet og jeg vil helt sikkert anbefale",
    navn:"Jannik",
    tidForAnmeldelse: "For 20 timer siden",
}, 
{
    antalStjerner: 4,
    overskrift: "Alt som lovet",
    beskrivelse: "Uret har mange gode og brugbare funktioner",
    navn:"Michael",
    tidForAnmeldelse: "For 1 dag siden",  
}, 
{
    antalStjerner: 4,
    overskrift: "Fedt design!!",
    beskrivelse: "Den grå farve på uret er vildt flot",
    navn:"Simon",
    tidForAnmeldelse: "For 1 dag siden",  
},
{
    antalStjerner: 5,
    overskrift: "Kan 100% anbefales",
    beskrivelse: "Den måler meget præcist, og hjælper mig med træning. ",
    navn:"Jeppe",
    tidForAnmeldelse: "For 3 dage siden",  
},
{
    antalStjerner: 3,
    overskrift: "Helt ok",
    beskrivelse: "Kan det den skal. Jeg bruger den hver dag",
    navn:"Tommy",
    tidForAnmeldelse: "For 4 dage siden",  
}]

const anmeldelseRaekke = document.querySelector(".anmeldelse-række")

anmeldelser.forEach((anmeldelse) => {
    console.log(anmeldelse.navn)
})