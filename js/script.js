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