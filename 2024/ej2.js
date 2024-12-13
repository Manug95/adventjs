/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:
Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
	let ancho = Math.max(...names.map(n => n.length));

	let cuadro = "*".repeat(ancho + 4) + "\n";

	for (let i = 0; i < names.length; i++) {
		cuadro += "* " + names[i] + " ".repeat(ancho - names[i].length) + " *\n";
	}

	cuadro += "*".repeat(ancho + 4);

	return cuadro;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));