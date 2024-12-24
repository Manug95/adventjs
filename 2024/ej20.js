/*
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. 
Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. 
Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:
* received: Lista con los regalos que Santa tiene actualmente.
* expected: Lista con los regalos que Santa debería tener.

Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:
* missing: Un objeto donde las claves son los nombres de los regalos faltantes y los 
  valores son las cantidades que faltan.
* extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados 
  y los valores son las cantidades que sobran.

Ten en cuenta que:
* Los regalos pueden repetirse en ambas listas.
* Las listas de regalos están desordenadas.
* Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
*/

/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const missing = {};
  const extra = {};
  const copiaReceived = [...received];

  for (let i = 0; i < copiaReceived.length; i++) {
    const matchIndex = expected.findIndex(e => e === copiaReceived[i]);

    if (matchIndex >= 0) {
      expected.splice(matchIndex, 1);
      received[i] = "";
    } else {
      if (typeof extra[copiaReceived[i]] === "undefined") {
        extra[copiaReceived[i]] = 1;
      } else {
        extra[copiaReceived[i]]++;
      }
    }
  }

  for (let i = 0; i < expected.length; i++) {
    if (typeof missing[expected[i]] === "undefined") {
      missing[expected[i]] = 1;
    } else {
      missing[expected[i]]++;
    }
  }

  return {
    missing,
    extra
  }
}

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']));
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
));
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
));
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }