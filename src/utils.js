import { wordsToDisplay } from './stores.js'
import { tick } from 'svelte';
import randomWords from 'random-words'

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function redirectHome(delay) {
    if (delay) {
        setTimeout(() => {
            window.location.href = '/';
        }, delay);
    } else {
        window.location.href = '/';
    }
}

export const emptyUser = {
    'email': "",
    'numGames': 0,
    'avgWPM': 0,
    'matchHistory': [],
    'matchHistoryTime': [],
    'uid': ""
}

export function inputType(e) {
    let label = e.target.parentNode.querySelector('label');

    if (e.target.value.length > 0) {
        label.style.top = "-10px";
        label.style.fontSize = "1em";
    } else {
        label.style.top = "10px";
        label.style.fontSize = "1.5em";
    }
}

export function cleanErrorMessage(message) {
    return message.split("/")[1].slice(0, -2)
}

export function generateRandomString() {
    let promptLength = 5;
    wordsToDisplay.subscribe(value => {
      promptLength = value;
    });

    if (promptLength == -1) { // Impossible mode
        let words = [];

        for (let i=0;i<50;i++) {
            words.push(makeFakeWord(Math.random() * 10 + 1));
        }

        return words.join(" ")
    }

    return randomWords(promptLength).join(" ");
  }


export let tracker = document.getElementById("tracker");

const delay = ms => new Promise(res => setTimeout(res, ms));

export async function initializeTracker() {
    await tick();
    await delay(50);
    tracker = document.getElementById("tracker");
    let letterOffsets = document.getElementById(0).getBoundingClientRect();
    tracker.style.top = (letterOffsets.bottom - 50) + "px";
    tracker.style.left = (letterOffsets.left+.5) + "px";
    tracker.style.width = (letterOffsets.width+.75) + "px";
}

export const profilePhotoLocation = '/profile-photos/';


function makeFakeWord(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}:";<>,./?~`';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

   return result;
}