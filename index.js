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

function logShout(string) {
  console.log('HELLO');
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGrandma(string) {
  
  if (string === lowercase) {
    return "I can't hear you!";
} else if (string === uppercase) {
    return "YES INDEED!";
} else (string === "I love you, Grandma"); {
    return "I love you, too.";
}
}