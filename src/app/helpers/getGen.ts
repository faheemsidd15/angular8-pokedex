/* This function is to be used in getting a certain range of numbers that
    that translate to pokemon id images */

export function GetGen(first, last) {
  let pokemonIDx = []

  for (let i = first; i <= last; i++) {
    if (i <= 9) {
      pokemonIDx.push(`00${[i]}`)
    } else if (i > 9 && i < 100) {
      pokemonIDx.push(`0${[i]}`)
    } else {
      pokemonIDx.push(`${[i]}`)
    }
  }

  return pokemonIDx
}
