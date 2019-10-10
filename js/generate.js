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
            randomSound(randomBool()); // 11-13
    } else if (randomBool()) {
        return randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)) +
            randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)); // 12-16
    } else {
        return randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)) +
            randomSound(randomBool()) +
            randomNumString(randomRange(2, 2)) +
            randomSound(randomBool()); // 15-19
    }
}

function copyTextToClipboard(inputId) {
    var copyText = document.getElementById(inputId);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateButton").onclick = function(e){
        document.getElementById("randomStringGenerated").value = hardCodedRandomString();
        setTimeout(function() {
            copyTextToClipboard("randomStringGenerated");
        }, 99);
    }
});
