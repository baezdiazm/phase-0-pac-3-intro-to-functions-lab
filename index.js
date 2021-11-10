function shout(word) {
    return word.toUpperCase();
}

function whisper(word) {
    return word.toLowerCase();
}

function logShout(phrase) {
    console.log(phrase.toUpperCase());
}

function logWhisper(phrase) {
    console.log(phrase.toLowerCase());
}

function sayHiToGrandma(phrase) {
    if (phrase === "I love you, Grandma.") {
        return "I love you, too."
    } else if (phrase === phrase.toUpperCase()) {
        return `YES INDEED!`
    } else if (phrase === phrase.toLowerCase()) {
        return `I can't hear you!`
    }
}