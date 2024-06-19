import {choice} from './random.js'

/*

given a starting point x,y, a probability that a given cell is land `probability`, 
and the number of cells in the island `cellCount`, generate an island by
rolling the probability that each of the cell's neighbors is land. 

while the cellCount is greater than zero, recurse with neighboring land cells.

track the list of cells in the island and return it.
*/
let generateIsland = ({matrix, probability, cellCount, x, y}) => {
  let island = []
  let neighbors = [
    [x-1, y],
    [x+1, y],
    [x, y-1],
    [x, y+1]
  ]
  let landNeighbors = neighbors.filter(([x,y]) => matrix[x][y] === 1)
  let landNeighbor = choice(landNeighbors)
  if (landNeighbor) {
    matrix[x][y] = 1
    island.push([x,y])

    return generateIsland({
      matrix, 
      probability, 
      cellCount: cellCount - 1, 
      x: landNeighbor[0], 
      y: landNeighbor[1]
    })
  }
  return island
}

let generateIslands = (matrix, numberCellsInIsland, numberIslands) => {

}

export {
  generateIsland,
  generateIslands
}