let mapTxt = await Deno.readTextFile(Deno.args[0])

let parseSigil = sigil => {
  if (sigil === 'W') {
    return { "type": "land"}
  } else {
    return { "type": "land"}
  }
}

let matrix = mapTxt
  .trim()
  .split('\n')
  .map((row, y) => {
    return row.split('').map((sigil, x) => {
      let coordinates = { x, y }
      let cell = {...parseSigil(sigil), ...coordinates}
      return cell
    })
  })
  .flat()

console.log(JSON.stringify(matrix,null,2))