const helloWorldRegex = (str) => /hello world/i.test(str); //you can insert exact strings to test for


console.log(helloWorldRegex("hello"))

const hasAVowel = (str) => /[aeiou]/i.test(str); //or an array of elements to test for

console.log(hasAVowel("j"))

const hasCatsOrDogs = (str) => /(cats|dogs)/i.test(str); //you can also enter whole words to test for

console.log(hasCatsOrDogs("CATS")) //i makes sure its not case sensitive

const hasVowelStart = (str) => /^[aeiou]/i.test(str); 

const hasPunctuationEnd = (str) => /[.?!]$/.test(str); //make sure to have multiline enabled so it captures the end of sentences on different lines.

const hasNothingOrDigits = (str) => /^\d*$/.test(str);

const hasNoFlippers = (str) => /^[^BCcDEHIKOoXxl]*$/.test(str);

const isValidEmail = (str) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(str);

const isValidPhoneNumber = (str) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(str);


const matchAllNumbers = (str) => str.match(/\d+/g) || [];

const matchAllNumbersAsNumbers = (str) => matchAllNumbers(str).map(Number);

const matchAllWords = (str) => str.match(/[a-zA-Z']+/g) || [];


const replaceAllNumbers = (str) => str.replace(/\d+/g, '???');

const fixFileName = (str) => str.replace(/\s+/g, '_');

const nameRedacter = (str) => str.replace(/\b[A-Z]{2,}\b/g, 'REDACTED');


const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
