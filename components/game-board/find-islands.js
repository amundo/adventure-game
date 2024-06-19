function findIslands(matrix) {
  const rowCount = matrix.length
  const columnCount = matrix[0].length
  const visited = new Array(rowCount).fill(0).map(() => new Array(columnCount).fill(false))
  const islands = []

  // Define directions for moving in 4 possible adjacent cells (up, down, left, right)
  const directions = [
    { x: -1, y: 0 }, // up
    { x: 1, y: 0 }, // down
    { x: 0, y: -1 }, // left
    { x: 0, y: 1 }, // right
  ]

  // Helper function to perform DFS to find all connected '1's in an island
  function dfs(x, y, island) {
    visited[x][y] = true
    island.push({ x, y })

    for (const dir of directions) {
      const nx = x + dir.x
      const ny = y + dir.y
      if (
        // Check if the next cell is within the bounds of the matrix and is a '1'
        nx >= 0 && nx < rowCount && ny >= 0 && ny < columnCount && matrix[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        dfs(nx, ny, island)
      }
    }
  }

  // Traverse the matrix to find all islands
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        const island = []
        dfs(i, j, island)
        islands.push(island)
      }
    }
  }

  return islands
}

export { findIslands }
