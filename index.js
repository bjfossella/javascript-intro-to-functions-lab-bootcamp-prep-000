function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var uppercase = "HELLO!";

uppercase.toUppercase() === uppercase; // true

var lowercase = 'hello!';

var mixedCase = 'Hi there!';

mixedCase.toLowerCase() === mixedCase; // false

mixedCase.toUpperCase() === mixedCase; // false

function logWhisper(string) {
  console.log(lowercase);
}

function sayHiToGrandma(string) {
  if (string === lowercase); // true {
    return "I can't hear you!";
}

function logShout(string) {
  console.log(uppercase);
}