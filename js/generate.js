"use strict";

const conl = 'bcdfghjkmnpqrstvwxyz';
const vowl = 'aeu';
const conu = 'BCDFGHJKLMNPQRSTVWXYZ';
const vowu = 'AEOU';

function randomBool() {
    return (Math.random() > 0.5);
}

function randomLetter(string) {
    const i = Math.floor(Math.random() * string.length);
    return string[i];
}

function randomRange(min, variance) {
    return Math.ceil(Math.random() * variance) + min;
}

function randomSound(upper) {
    if (upper) {
        return randomLetter(conu) + randomLetter(vowu) + randomLetter(conu);
    } else {
        return randomLetter(conl) + randomLetter(vowl) + randomLetter(conl);
    }
}

function randomNumString(length) {
    let numString = "";
    for (let i = 0; i < length; i++) {
        numString += randomRange(2, 7).toString();
    }
    return numString;
}

function hardCodedRandomString() {
    if (randomBool()) {
        return randomSound(randomBool()) +
            randomNumString(randomRange(4, 2)) +
            randomSound(randomBool());
    } else if (randomBool()) {
        return randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)) +
            randomSound(randomBool()) +
            randomNumString(randomRange(2, 2));
    } else {
        return randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)) +
            randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)) +
            randomSound(randomBool());
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").onclick = function(e){
        document.getElementById("text").value = hardCodedRandomString();
    }
});
