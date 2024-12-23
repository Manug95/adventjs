/** 
 *  @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let matches = [];
  let result = packages;

  do {
    matches = result?.match(/\([a-z]+\)/);

    if (matches) {
      let asd = matches[0]
        .substring(1, matches[0].length - 1)
        .split("")
        .reverse()
        .join("");

      result = result.replace(matches[0], asd);
    }

  } while (matches);

  return result;
}
console.log(fixPackages('a(cb)de'));
console.log(fixPackages('a(bc(def)g)h'));
console.log(fixPackages('abc(def(gh)i)jk'));
console.log(fixPackages('a(b(c))e'));