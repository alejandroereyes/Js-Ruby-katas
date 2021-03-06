// Note for this exercise, follow these simplified pig latin rules
// If the first letter is a vowel, add "way" to the end
// If the first letter is a consonant, move it to the end and add "ay"
// Hint: Use regex

function pigatize(str) {
  var vowel = /^[aeiou]/i;
  var consonant = /^[^aeiou]/i;

  if (vowel.test(str)) {
    return str += "way";
  };

  if (consonant.test(str)) {
    return str.slice(1,str.length) + str[0] + 'ay';
  };
};

console.log(pigatize('apple'));
console.log(pigatize('cat'));
