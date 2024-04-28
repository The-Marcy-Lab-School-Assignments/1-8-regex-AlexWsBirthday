
const swapAllCases = (str) => str.replace(str.match(/[A-Z]/), /[a-z]/)
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const isUppercaseLetter = char === char.toUpperCase();
//     result += isUppercaseLetter ? char.toLowerCase() : char.toUpperCase();
//   }

//   return result;
// };

//swap the cases!

module.exports = {
  swapAllCases,
};
