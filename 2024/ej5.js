/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  const shoesArray = [];
  const shoesBySizeObj = {};

  shoes.forEach(s => {
    if (typeof shoesBySizeObj[s.size] === "undefined") {
      shoesBySizeObj[s.size] = { "I": 0, "R": 0 };
    }

    shoesBySizeObj[s.size][s.type]++;
  });

  Object.keys(shoesBySizeObj).forEach(k => {
    for (let i = 0; i < Math.min(shoesBySizeObj[k]["R"], shoesBySizeObj[k]["I"]); i++) {
      shoesArray.push(+k);
    }
  });

  return shoesArray;
}
console.log(organizeShoes([
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]));
// function organizeShoes(shoes) {
// 	const shoesArray = [];
// 	const rightShoes = [];
// 	const leftShoes = [];

// 	for (let i = 0; i < shoes.length; i++) {
// 		if (shoes[i].type === "R") {
// 			rightShoes.push(shoes[i]);
// 		} else {
// 			leftShoes.push(shoes[i]);
// 		}
// 	}

// 	for (let i = 0; i < rightShoes.length; i++) {
// 		const left = leftShoes.findIndex(ls => ls.size === rightShoes[i].size);
// 		if (left >= 0) {
// 			shoesArray.push(rightShoes[i].size);
// 			leftShoes.splice(left, 1);
// 		}
// 	}

// 	return shoesArray;
// }