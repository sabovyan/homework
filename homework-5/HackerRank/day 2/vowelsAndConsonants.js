function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].toLowerCase();
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      vowels.push(letter);
    } else {
      consonants.push(letter);
    }
  }
  // eslint-disable-next-line no-console
  console.log(`${vowels.join('\n')}\n${consonants.join('\n')}`);
}
vowelsAndConsonants('javascriptloops');
