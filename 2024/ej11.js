/*
El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha 
codificado los nombres de todos los archivos importantes. 
Ahora los elfos no pueden encontrar los archivos originales y necesitan 
tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:
* Comienza con un número (puede contener cualquier cantidad de dígitos).
* Luego tiene un guion bajo _.
* Continúa con un nombre de archivo y su extensión.
* Finaliza con una extensión extra al final (que no necesitamos).

Ten en cuenta que el nombre de los archivos pueden contener 
letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

Tu tarea es implementar una función que reciba un string 
con el nombre de un archivo codificado y devuelva solo la parte 
importante: el nombre del archivo y su extensión.
*/

/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  // const indicePrimer_ = filename
  //   .split("")
  //   .findIndex(c => c === "_")
  // ;
  // const indiceUltimoPunto = filename
  //   .split("")
  //   .reverse()
  //   .findIndex(c => c === ".")
  // ;
  // return filename
  //   .slice(indicePrimer_+1, filename.length-indiceUltimoPunto-1)
  // ;
  return filename.match(/[^0-9_][a-zA-Z0-9_-]+.[a-z]+/)?.[0];
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'));
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'));
// ➞ "elf-roster.csv"