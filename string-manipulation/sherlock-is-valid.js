const isValid = (s) => {
  const sArr = s.split('');
  const charMap = new Map();
  sArr.map((c) => {
    const count = charMap.get(c) || 0;
    charMap.set(c, count + 1);
  })
  const countMap = new Map();
  charMap.forEach((v, i) => {
    const count = countMap.get(v) || 0;
    countMap.set(v, count + 1);
  });
  if (countMap.size > 2) {
    return 'NO';
  } else if (countMap.size === 2) {
    const [v1, v2] = countMap.keys();
    const [c1, c2] = countMap.values();
    if ((v1 === 1 && c1 === 1) || (v2 ===1 && c2 === 1)) {
      return 'YES';
    }
    if (Math.abs(v2 - v1 ) > 1) {
      return 'NO';
    }
    if (c1 !== 1 && c2 !== 1) {
      return 'NO';
    }
  }
  return 'YES';
}

let s = 'aabbcd';
console.log(isValid(s));
s = 'aabbccddeefghi';
console.log(isValid(s));
s = 'abcdefghhgfedecba';
console.log(isValid(s));
s = 'aaaabbcc';
console.log(isValid(s));
s = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
console.log(isValid(s));

