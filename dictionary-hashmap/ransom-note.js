const checkMagazine = (magazine, note) => {
  if (note.length > magazine.length) {
    return 'No';
  }
  const map = new Map();
  magazine.map((word) => {
    const found = map.get(word) || 0;
    map.set(word, found + 1);
  });
  for (let i = 0; i < note.length; i++) {
    const word = note[i];
    const found = map.get(word) || 0;
    if (!found) {
      return 'No';
    }
    if (found === 1) {
      map.delete(word);
    } else {
      map.set(word, found - 1);
    }
  }
  return 'Yes';
}

let magazine = 'attack at dawn';
let note = 'Attack at dawn';
magazine = magazine.split(' ');
note = note.split(' ');
console.log(magazine, note, checkMagazine(magazine, note));

magazine = 'give me one grand today night';
note = 'give one grand today';
magazine = magazine.split(' ');
note = note.split(' ');
console.log(magazine, note, checkMagazine(magazine, note));

magazine = 'two times three is not four';
note = 'two times two is four';
magazine = magazine.split(' ');
note = note.split(' ');
console.log(magazine, note, checkMagazine(magazine, note));

magazine = 'ive got a lovely bunch of coconuts';
note = 'ive got some coconuts';
magazine = magazine.split(' ');
note = note.split(' ');
console.log(magazine, note, checkMagazine(magazine, note));
