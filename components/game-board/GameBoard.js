import { choice } from "../../modules/random.js"
import { GameCell } from "../game-cell/GameCell.js"
import { findIslands } from "./find-islands.js"

class GameBoard extends HTMLElement {
  #boardData = { size: 25 }

  constructor() {
    super()
  }

  set data(boardData) {
    this.#boardData = boardData
    this.render()
  }

  get data() {
    return this.#boardData
  }

  render() {
    this.innerHTML = "" // Clear previous content
    this.renderMap()
  }

  renderMap() {
    this.innerHTML = "" // Clear previous content
    const size = this.#boardData.map.length

    const totalCells = size * size

    for (let i = 0; i < totalCells; i++) {
      const x = i % size
      const y = Math.floor(i / size)

      let terrain
      if (this.#boardData.map) {
        terrain = this.#boardData.map[y][x] === 0 ? "water" : "land"
      }
      const cellData = {
        gridColumn: x + 1,
        gridRow: y + 1,
        x,
        y,
        terrain,
      }

      const gameCell = document.createElement("game-cell")
      gameCell.data = cellData
      this.append(gameCell)
    }

    this.islands = findIslands(this.data.map)
      .map(islandCells => islandCells.map(({ x:y, y:x }) => this.at({ x, y })))
  }

  get landMatrix() {
  }

  at({ x, y }) {
    return this.querySelector(`game-cell[x="${x}"][y="${y}"]`)
  }

  get cells() {
    return Array.from(this.querySelectorAll("game-cell"))
  }

  get randomCell() {
    return choice(this.cells)
  }

  neighborsOf(cell, diagonals = false) {
    const { x, y } = cell
    const directions = [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ]
    if (diagonals) {
      directions.push(
        { x: -1, y: -1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: 1, y: 1 },
      )
    }
    return directions
      .map((dir) => this.at({ x: x + dir.x, y: y + dir.y }))
      .filter(Boolean)
      .concat(cell)
  }

  changeNeighbors({ x, y, terrain }) {
    this.neighborsOf({ x, y }, true).forEach((cell) => {
      if (Math.random() < 0.8 && cell) {
        cell.terrain = terrain
        cell.render() // Re-render only the changed cell
      }
    })
  }

  addCharacter(character) {
    // Add character to the board
  }

  addItem(item) {
    // Add item to the board
  }
}

customElements.define("game-board", GameBoard)
export { GameBoard }
