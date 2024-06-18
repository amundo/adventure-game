import { GameCell } from "../game-cell/GameCell.js"

class GameBoard extends HTMLElement {
  #boardData = {}

  constructor() {
    super()
  }

  render() {
    let { rows, columns } = this.#boardData

    if (!rows) {
      return
    }
    if (!columns) {
      return
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = new GameCell()
        cell.setPosition(i, j)
        this.appendChild(cell)
      }
    }
  }

  set data(boardData) {
    this.#boardData = boardData
    this.render()
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
