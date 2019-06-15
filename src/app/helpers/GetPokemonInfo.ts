export function GetTypes(types: []) {
  const newTypes = []
  types.map(type => {
    newTypes.push(type["type"]["name"])
  })

  return newTypes
}
export function GetSprites(sprites: {}) {
  return {
    front_default: sprites["front_default"],
    front_shiny: sprites["front_shiny"]
  }
}
