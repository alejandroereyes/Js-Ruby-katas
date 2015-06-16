// Note for this exercise, follow these simplified pig latin rules
// If the first letter is a vowel, add "way" to the end
// If the first letter is a consonant, move it to the end and add "ay"
// Hint: Use regex

function pigatize(str) {
  vowel = /^[aeiou]/i;

  if (vowel.test(str)) {
    return str += "way";
  }
};

console.log(pigatize('apple'));
