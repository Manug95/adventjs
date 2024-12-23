/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los 
regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja 
soporta 1, 2, 5, 10 de peso y se representan así:
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}

Tu misión es que al recibir el peso de los regalos, uses las mínimas 
cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo).
Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en 
blanco a la derecha de una caja si no son necesarios.
*/

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  let pilaDeCajas = [];
  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  };
  const regExp = /\s[_]+\s/;

  while (weight >= 1) {
    if (weight >= 10) {
      pilaDeCajas.push(boxRepresentations["10"]);
      weight -= 10;
    } else if (weight >= 5) {
      pilaDeCajas.push(boxRepresentations["5"]);
      weight -= 5;
    } else if (weight >= 2) {
      pilaDeCajas.push(boxRepresentations["2"]);
      weight -= 2;
    } else {
      pilaDeCajas.push(boxRepresentations["1"]);
      weight--;
    }
  }
  const a = pilaDeCajas
    .reverse()
    .flat()
  ;
  const b = a.map((c,i) => {
      if (regExp.test(c)) {
        const cant_ = a[i+1].length - (a[i-1]?.length ?? 0) - 1;
        return `${(a[i-1] ?? "")}${"_".repeat(cant_ < 0 ? 0 : cant_)}${a[i-1] ? "" : " "}`;
      } else {
        return regExp.test(a[i+1]) ? "" : c;
      }
    })
    .filter(c => c.length > 0)
  ;

  if (b[0].length < 3) {
    b.splice(0,1," _");
  } 
  else {
    b[0] = " " + b[0].slice(1);
  }

  return b.join("\n");
}

console.log(distributeWeight(1));
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2));
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3));
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

console.log(distributeWeight(16));


// function distributeWeight(weight) {
//   let pilaDeCajas = "";
//   const boxRepresentations = {
//     1: [" _ ", "|_|"] ,
//     2: [" ___ ", "|___|"],
//     5: [" _____ ", "|     |", "|_____|"],
//     10: [" _________ ", "|         |", "|_________|"]
//   };

//   while (weight >= 1) {
//     if (weight >= 10) {
//       const fila = boxRepresentations["10"].join("\n");
//       pilaDeCajas = fila
//        + "_".repeat(pilaDeCajas.length - fila.length)
//        + pilaDeCajas;
//       // pilaDeCajas = boxRepresentations["10"].slice(1).join("\n") + "\n" + pilaDeCajas;
//       weight -= 10;
//     } else if (weight >= 5) {
//       pilaDeCajas = boxRepresentations["5"].join("\n") + pilaDeCajas;
//       // pilaDeCajas = boxRepresentations["5"].slice(1).join("\n") + "\n" + pilaDeCajas;
//       weight -= 5;
//     } else if (weight >= 2) {
//       pilaDeCajas = boxRepresentations["2"].join("\n") + pilaDeCajas;
//       // pilaDeCajas = boxRepresentations["2"].slice(1).join("\n") + "\n" + pilaDeCajas;
//       weight -= 2;
//     } else {
//       pilaDeCajas = boxRepresentations["1"].join("\n") + pilaDeCajas;
//       // pilaDeCajas = boxRepresentations["1"].slice(1).join("\n") + "\n" + pilaDeCajas;
//       weight--;
//     }
//     // pilaDeCajas += "\n";
//   }

//   return pilaDeCajas;
// }

// function distributeWeight(weight) {
//   let pilaDeCajas = "";
//   // const boxRepresentations = {
//   //   1: ["|_|"] ,
//   //   2: ["|___|"],
//   //   5: ["|     |", "|_____|"],
//   //   10: ["|         |", "|_________|"]
//   // };
//   const boxRepresentations = {
//     1: [" _ ", "|_|"] ,
//     2: [" ___ ", "|___|"],
//     5: [" _____ ", "|     |", "|_____|"],
//     10: [" _________ ", "|         |", "|_________|"]
//   };

//   while (weight >= 1) {
//     let fila;
//     let cajaElegida;
//     if (weight >= 10) {cajaElegida = "10";
//       fila = boxRepresentations["10"].join("\n");
//       weight -= 10;
//     } else if (weight >= 5) {cajaElegida = "5";
//       fila = boxRepresentations["5"].join("\n");
//       weight -= 5;
//     } else if (weight >= 2) {cajaElegida = "2";
//       fila = boxRepresentations["2"].join("\n");
//       weight -= 2;
//     } else {cajaElegida = "1";
//       fila = boxRepresentations["1"].join("\n");
//       weight--;
//     }

//     pilaDeCajas = fila
//       // + "_".repeat((pilaDeCajas.length > 0 ? pilaDeCajas.length : fila.length) - fila.length)
//       // + (pilaDeCajas.length > 0 ? (pilaDeCajas.length !== fila.length ? "_" : "") : "")
//       + (pilaDeCajas.length > 0 && pilaDeCajas.length !== fila.length ? "_" : "")
//       + (pilaDeCajas.length > 0 ? "\n" : "") 
//       + pilaDeCajas.slice(pilaDeCajas.indexOf("|"))
//     ;
//     // console.log("largo pilaDeCajas:   "+pilaDeCajas.length);
//     // console.log("largo fila:          "+fila.length);

//     // pilaDeCajas = pilaDeCajas.replace(/_\s[_]+\s/, "_");
//   }

//   return pilaDeCajas;
// }