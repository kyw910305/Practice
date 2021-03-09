// function getLetter(s) {
//   let letter;
//   // Write your code here
//   switch ((s.charAt(0)).toLowerCase()) {
//     case a: case e: case i: case o: case u : letter = 'A';
//     break;
//     case b: case c: case d: case f: case g : letter = 'B';
//     break;
//     case h: case j: case k: case l: case m : letter = 'C';
//     break;
//     case n: case p: case q: case r: case s: case t: case u: case v: case w: case x: case y: case z : 'D'
//     break;
//   }
//   return letter;
// }

let letter;
let s = 'adfgt';
// Write your code here
switch (s.toLowerCase().charAt(0)) {
  case 'a': case 'e': case 'i': case 'o': case 'u' : letter = 'A';
    break;
  case 'b': case 'c': case 'd': case 'f': case 'g' : letter = 'B';
    break;
  case 'h': case 'j': case 'k': case 'l': case 'm' : letter = 'C';
    break;
  case 'n': case 'p': case 'q': case 'r': case 's': case 't': case 'u': case 'v': case 'w': case 'x': case 'y': case 'z' : letter = 'D'
    break;
  default:
    console.log('Invalid value');
}

console.log(letter);