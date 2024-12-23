/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando 
en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable 
que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:
* Tiene una cabecera con el nombre de la columna.
* El nombre de la columna pone la primera letra en mayúscula.
* Cada fila debe contener los valores de los objetos en el orden correspondiente.
* Cada valor debe estar alineado a la izquierda.
* Los campos dejan siempre un espacio a la izquierda.
* Los campos dejan a la derecha el espacio necesario para alinear la caja.
*/

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  let tabla = "";
  const encabezados = Object.keys(data[0]);
  const anchoColumnas = [
    ...encabezados.map(e => {
      return Math.max(
        ...data
          .map(d => d[e]
          .toString()
          .length)
        , e.length
      )
    })
  ];
  const divisionTabla = "+" 
    + anchoColumnas.map(ac => "-".repeat(ac+2) + "+")
      .join("")
  ;

  tabla += divisionTabla + "\n";
  encabezados.forEach((k,i) => {
    tabla += `| ${k.charAt(0).toUpperCase() + k.substring(1)}`;
    tabla += " ".repeat(anchoColumnas[i]+1-k.length);
  });
  tabla += "|\n" + divisionTabla + "\n";
  
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < encabezados.length; j++) {
      tabla += `| ${data[i][encabezados[j]]}`
        + " ".repeat(anchoColumnas[j]+1-data[i][encabezados[j]].toString().length);
    }
    tabla += "|\n";
  }
  tabla += divisionTabla;

  return tabla;
}

console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]));
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+