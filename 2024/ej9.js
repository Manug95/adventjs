/*
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. 
Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe 
recoger frutas mágicas (*) que le sirve de combustible. 
El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:
* @ es la locomotora del tren.
* o son los vagones del tren.
* * es una fruta mágica.
* · son espacios vacíos.

mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:
* 'L': izquierda
* 'R': derecha
* 'U': arriba
* 'D': abajo.

Con esta información, debes devolver una cadena de texto:

* 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
* 'eat': Si el tren recoge una fruta mágica (*).
* 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.

*/

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const result = {
    "*": "eat",
    "·": "none",
    "o": "crash"
  }
  const coordYLocomotora = board.findIndex(b => b.includes("@"));
  const coordxLocomotora = board[coordYLocomotora].split("").findIndex(b => b === "@");

  const coordsNextMove = [
    coordxLocomotora + (mov === "L" ? -1 : (mov === "R" ? 1 : 0)),
    coordYLocomotora + (mov === "D" ? 1 : (mov === "U" ? -1 : 0))
  ];

  const r = board[coordsNextMove[1]]?.charAt(coordsNextMove[0]);
  return result[r] ?? "crash";
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha


// SOL DE 1 ESTRELLA
// function moveTrain(board, mov) {
//   let result = "";
//   const coordYLocomotora = board.findIndex(b => b.includes("@"));
//   const coordxLocomotora = board[coordYLocomotora].split("").findIndex(b => b === "@");
//   // contando a partir de la esquina superior izq
//   const locomotora = [coordxLocomotora, coordYLocomotora];

//   switch (mov) {
//     case "U": {
//       if (coordYLocomotora === 0) {
//         result = "crash";
//       } else if (board[coordYLocomotora-1].charAt(coordxLocomotora) === "*") {
//         result = "eat";
//       } else if (board[coordYLocomotora-1].charAt(coordxLocomotora) === "o") {
//         result = "crash";
//       } else {
//         result = "none"
//       }
//       break;
//     }
//     case "D": {
//       if (coordYLocomotora === board.length-1) {
//         result = "crash";
//       } else if (board[coordYLocomotora+1].charAt(coordxLocomotora) === "*") {
//         result = "eat";
//       } else if (board[coordYLocomotora+1].charAt(coordxLocomotora) === "o") {
//         result = "crash";
//       } else {
//         result = "none"
//       }
//       break;
//     }
//     case "L": {
//       if (coordxLocomotora === 0) {
//         result = "crash";
//       } else if (board[coordYLocomotora].charAt(coordxLocomotora-1) === "*") {
//         result = "eat";
//       } else if (board[coordYLocomotora].charAt(coordxLocomotora-1) === "o") {
//         result = "crash";
//       } else {
//         result = "none"
//       }
//       break;
//     }
//     case "R": {
//       if (coordxLocomotora === board[0].length-1) {
//         result = "crash";
//       } else if (board[coordYLocomotora].charAt(coordxLocomotora+1) === "*") {
//         result = "eat";
//       } else if (board[coordYLocomotora].charAt(coordxLocomotora+1) === "o") {
//         result = "crash";
//       } else {
//         result = "none"
//       }
//       break;
//     }
//   }

//   return result;
// }

// OTRO RESULTADO DE 1 ESTRELLA
// function moveTrain(board, mov) {
//   let result = "";
// const coordYLocomotora = board.findIndex(b => b.includes("@"));
// const coordxLocomotora = board[coordYLocomotora].split("").findIndex(b => b === "@");
// // contando a partir de la esquina superior izq
// const locomotora = [coordxLocomotora, coordYLocomotora];

// const coordsNextMove = [
//   coordxLocomotora + (mov === "L" ? -1 : (mov === "R" ? 1 : 0)),
//   coordYLocomotora + (mov === "D" ? 1 : (mov === "U" ? -1 : 0))
// ];

// if (coordsNextMove.some(c => c < 0)) {
//   return "crash";
// }

// result = board[coordsNextMove[1]].charAt(coordsNextMove[0]);
// if (result === "*") {
//   return "eat";
// } else if (result === "·") {
//   return "none";
// } else {
//   return "crash";
// }
// // switch () {
// //   case "o": return "crash";
// //   case "*": return "eat";
// //   case "·": return "none";
// //   default: return "crash";
// // }

// // return coordsNextMove;
// }