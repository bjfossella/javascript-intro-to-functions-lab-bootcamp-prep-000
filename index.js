function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var uppercase = "HELLO!";

var lowercase = 'hello!';

var mixedCase = 'Hi there!';

uppercase.toUppercase() === uppercase; // true
lowercase.toLowerCase() === lowercase; // true
mixedCase.toLowerCase() === mixedCase; // false
mixedCase.toUpperCase() === mixedCase; // false

function logShout(string) {
  console.log('HELLO');
}

function logWhisper(string) {
  console.log('hello');
}

function sayHiToGranma(string) {
  if (string.toLowerCase() === lowercase)
    return 'I can\'t hear you!';
}
