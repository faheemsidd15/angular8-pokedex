export function GetTypes(types: []) {
  const newTypes = []
  types.map(type => {
    newTypes.push(type["type"]["name"])
  })

  return newTypes
}
