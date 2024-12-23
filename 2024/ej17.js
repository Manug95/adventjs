/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado 
bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. 
Quiere que todos los juguetes queden inutilizados y por eso ha dejado una 
cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas.
Cada celda vacía debe mostrar un número que indique cuántas bombas de 
carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.
*/

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const zonaMapeada = [...grid].map(z => z.map(_x => 0));
  // const zonaMapeada = grid.map(g => g.map(() => 0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if (grid?.[i-1]?.[j-1]) zonaMapeada[i][j]++;
      // if (grid?.[i-1]?.[j]) zonaMapeada[i][j]++;
      // if (grid?.[i-1]?.[j+1]) zonaMapeada[i][j]++;
      // if (grid?.[i]?.[j-1]) zonaMapeada[i][j]++;
      // if (grid?.[i]?.[j+1]) zonaMapeada[i][j]++;
      // if (grid?.[i+1]?.[j-1]) zonaMapeada[i][j]++;
      // if (grid?.[i+1]?.[j]) zonaMapeada[i][j]++;
      // if (grid?.[i+1]?.[j+1]) zonaMapeada[i][j]++;

      // zonaMapeada[i][j] += grid?.[i-1]?.[j-1] ?? 0;
      // zonaMapeada[i][j] += grid?.[i-1]?.[j] ?? 0;
      // zonaMapeada[i][j] += grid?.[i-1]?.[j+1] ?? 0;
      // zonaMapeada[i][j] += grid?.[i]?.[j-1] ?? 0;
      // zonaMapeada[i][j] += grid?.[i]?.[j+1] ?? 0;
      // zonaMapeada[i][j] += grid?.[i+1]?.[j-1] ?? 0;
      // zonaMapeada[i][j] += grid?.[i+1]?.[j] ?? 0;
      // zonaMapeada[i][j] += grid?.[i+1]?.[j+1] ?? 0;

      for (let h = -1; h < 2; h++) {
        for (let k = -1; k < 2; k++) {
          // if (h !== k) zonaMapeada[i][j] += (grid?.[i+h]?.[j+k] ?? 0);
          if (h !== k || (h !== 0 && k !== 0)) zonaMapeada[i][j] += (grid?.[i+h]?.[j+k] ?? 0);
        }
      }
    }
  }

  return zonaMapeada;
}


console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

// console.log(detectBombs([
//   [true, false],
//   [false, false]
// ]));
// [
//   [0, 1],
//   [1, 1]
// ]

// console.log(detectBombs([
//   [true, true],
//   [false, false],
//   [true, true]
// ]));
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]