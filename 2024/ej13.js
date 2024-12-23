/*
Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a 
Papá Noel a distribuir regalos dentro de un gran almacén. 
El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el 
robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:
* L: Mover hacia la izquierda
* R: Mover hacia la derecha
* U: Mover hacia arriba
* D: Mover hacia abajo

Pero también tiene ciertos modificadores para los movimientos:
*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)

Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento 
invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo 
que contabiliza que se hizo el movimiento D pero no el U. 
Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:
true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
*/

/** 
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const coords = [0,0];
  const m = [];
  const movCOntrario = {
    "U": "D",
    "D": "U",
    "R": "L",
    "L": "R"
  };

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "*") {
      m.push(moves[i+1]);
    } else if (moves[i] === "!") {
      m.push(movCOntrario[moves[i+1]]);
      i++;
    } else if (moves[i] === "?") {
      if (!m.includes(moves[i+1])) m.push(moves[i+1]);
      i++;
    } else {
      m.push(moves[i]);
    }
  }

  for (let i = 0; i < m.length; i++) {
    if (m[i] === "U" || m[i] === "D") {
      if (m[i] === "U") { coords[1]++; }
      else { coords[1]--; }
    } else {
      if (m[i] === "R") { coords[0]++; }
      else { coords[0]--; }
    }
  }

  return coords[0] === 0 && coords[1] === 0 ? true : coords;
}

console.log('R         ', isRobotBack('R'));     // [1, 0]
console.log('RL        ', isRobotBack('RL'));   // true
console.log('RLUD      ', isRobotBack('RLUD'));  // true
console.log('*RU       ', isRobotBack('*RU'));   // [2, 1]
console.log('R*U       ', isRobotBack('R*U'));   // [1, 2]
console.log('LLL!R     ', isRobotBack('LLL!R')); // [-4, 0]
console.log('R?R       ', isRobotBack('R?R'));   // [1, 0]
console.log('U?D       ', isRobotBack('U?D'));   // true
console.log('R!L       ', isRobotBack('R!L'));   // [2,0]
console.log('U!D       ', isRobotBack('U!D'));   // [0,2]
console.log('R?L       ', isRobotBack('R?L'));   // true
console.log('U?U       ', isRobotBack('U?U'));   // [0,1]
console.log('*U?U      ', isRobotBack('*U?U'));  // [0,2]
console.log('U?D?U     ', isRobotBack('U?D?U')); // true

// Ejemplos paso a paso:
console.log('R!U?U     ', isRobotBack('R!U?U')); // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log('UU!U?D   ', isRobotBack('UU!U?D')); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'


// ESTA SOLUCION ME DIO 1 ESTRELLA
// function isRobotBack(moves) {
//   const coords = [0,0];
//   const modifiers = ["?", "!", "*"];
//   const movHechos = [];

//   for (let i = 0; i < moves.length; i++) {
//     if (modifiers.includes(moves[i-1])) {
//       switch (moves[i-1]) {
//         case "*": 
//           if (moves[i] === "U") coords[1] += 2;
//           if (moves[i] === "D") coords[1] -= 2;
//           if (moves[i] === "R") coords[0] += 2;
//           if (moves[i] === "L") coords[0] -= 2;
//           movHechos.push(moves[i]);
//           break;
//         case "!": 
//           if (moves[i] === "U") {
//             coords[1]--; 
//             movHechos.push("D");
//           }
//           if (moves[i] === "D") {
//             coords[1]++;
//             movHechos.push("U");
//           }
//           if (moves[i] === "R") {
//             coords[0]--; 
//             movHechos.push("L");
//           }
//           if (moves[i] === "L") {
//             coords[0]++;
//             movHechos.push("R");
//           }
//           break;
//         case "?": 
//           if (!movHechos.includes(moves[i])) {
//             if (moves[i] === "U") coords[1]++;
//             if (moves[i] === "D") coords[1]--;
//             if (moves[i] === "R") coords[0]++;
//             if (moves[i] === "L") coords[0]--;
//             movHechos.push(moves[i]);
//           }
//           break;
//       }
//     } else {
//       if (!modifiers.includes(moves[i])) {
//         if (moves[i] === "U") coords[1]++;
//         if (moves[i] === "D") coords[1]--;
//         if (moves[i] === "R") coords[0]++;
//         if (moves[i] === "L") coords[0]--;
//         movHechos.push(moves[i]);
//       }
//     }
//   }

//   return coords[0] === 0 && coords[1] === 0 ? true : coords;
// }


//OTRA SOLUCION DE 1 ESTRELLA
// function isRobotBack(moves) {
//   const coords = [0,0];
//   let modificador = "";
//   const movHechos = [];
//   const calcularModificador = {
//     "*": () => 2,
//     "!": () => -1,
//     "?": (mov) => movHechos.includes(mov) ? 0 : 1
//   };
//   const calcularMovimiento = {
//     "U": (mod) => { coords[1] += (calcularModificador[mod]?.("U") ?? 1)*1 },
//     "D": (mod) => { coords[1] += (calcularModificador[mod]?.("D") ?? 1)*(-1) },
//     "R": (mod) => { coords[0] += (calcularModificador[mod]?.("R") ?? 1)*1 },
//     "L": (mod) => { coords[0] += (calcularModificador[mod]?.("L") ?? 1)*(-1) }
//   };
//   const movCOntrario = {
//     "U": "D",
//     "D": "U",
//     "R": "L",
//     "L": "R"
//   };

//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i] === "!" || moves[i] === "*" || moves[i] === "?") {
//       modificador = moves[i];
//     } else {
//       calcularMovimiento[moves[i]](modificador);
//       movHechos.push(modificador === "!" ? movCOntrario[moves[i]] : moves[i]);
//       modificador = "";
//     }
//   }

//   return coords[0] === 0 && coords[1] === 0 ? true : coords;
// }


//OTRA SOLUCION DE 1 ESTRELLA
// function isRobotBack(moves) {
//   let modificador = "";
//   const movHechos = [];
//   const calcularModificador = {
//     "*": () => 2,
//     "!": () => -1,
//     "?": (mov) => movHechos.includes(mov) ? 0 : 1
//   };
//   const calcularMovimiento = {
//     "U": (mod) => (calcularModificador[mod]?.("U") ?? 1)*1,
//     "D": (mod) => (calcularModificador[mod]?.("D") ?? 1)*(-1),
//     "R": (mod) => (calcularModificador[mod]?.("R") ?? 1)*1,
//     "L": (mod) => (calcularModificador[mod]?.("L") ?? 1)*(-1)
//   };
//   const movCOntrario = {
//     "U": "D",
//     "D": "U",
//     "R": "L",
//     "L": "R"
//   };
//   const pasos = {
//     "U": 0,
//     "D": 0,
//     "R": 0,
//     "L": 0
//   };

//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i] === "!" || moves[i] === "*" || moves[i] === "?") {
//       modificador = moves[i];
//     } else {
//       pasos[moves[i]] += calcularMovimiento[moves[i]](modificador);
//       movHechos.push(modificador === "!" ? movCOntrario[moves[i]] : moves[i]);
//       modificador = "";
//     }
//   }

//   const coords = [pasos.R+pasos.L, pasos.U+pasos.D];

//   return coords[0] === 0 && coords[1] === 0 ? true : coords;
// }