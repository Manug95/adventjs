/*
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos 
de ellos están duplicados y deben ser eliminados para evitar confusiones. 
Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  const conjunto = new Set([...gifts]);
  return [...conjunto].sort((a, b) => a - b);
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]));