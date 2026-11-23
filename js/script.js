"use strict";

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
