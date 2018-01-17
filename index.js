function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var uppercase = "HELLO!";

var lowercase = 'hello!';

var mixedCase = 'Hi there!';

function logShout(string) {
  console.log('HELLO');
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGrandma(string) {
  uppercase.toUppercase() === uppercase; // true
  mixedCase.toLowerCase() === mixedCase; // false
  mixedCase.toUpperCase() === mixedCase; // false
  
  if (string === "I love you, Grandma") {
    return 'I can\'t hear you!';
} else if (string === uppercase) {
    return 'YES INDEED!';
} else (string === lowercase); {
    return 'I love you, too.';
}
}