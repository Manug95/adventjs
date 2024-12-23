/** 
 *  @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  if (box[0].includes("*") || box[box.length - 1].includes("*")) {
    return false;
  }

  const centroCaja = box.slice(1, box.length-1);

  return centroCaja
    .every(x => x.startsWith("#") && x.endsWith("#"))
    &&
    centroCaja.some(x => x.includes("*"))
  ;
}
console.log(inBox([
  "###",
  "#*#",
  "###"
])); // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])); // ➞ true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])); // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])); // ➞ false
// function inBox(box) {
//   if (box[0].includes("*") || box[box.length - 1].includes("*")) {
//     return false;
//   }

//   let hasGift = false;

//   for (let i = 1; i < box.length - 1; i++) {
//     if (box[i].startsWith("*") || box[i].endsWith("*")) {
//       return false;
//     }

//     if (box[i].includes("*")) hasGift = true;
//   }

//   return hasGift;
// }