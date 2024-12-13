/*
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. 
Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

* El árbol está compuesto de triángulos de caracteres especiales.
* Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
* Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
* El árbol siempre debe tener la misma longitud por cada lado.
* Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
*/

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  let espaciosVaciosIniciales = height - 1;
  let arbol = "";
  let tronco = "_".repeat(espaciosVaciosIniciales) 
             + "#" 
             + "_".repeat(espaciosVaciosIniciales)
  ;
  tronco += "\n" + tronco;

  for (let i = 0; i < height; i++) {
    arbol += "_".repeat(espaciosVaciosIniciales)
          + ornament.repeat(i*2+1)
          + "_".repeat(espaciosVaciosIniciales)
          + "\n"
    ;
    espaciosVaciosIniciales--;
  }

  return arbol + tronco;
}

console.log(createXmasTree(5, "*"));