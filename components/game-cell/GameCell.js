class GameCell extends HTMLElement {
  #cellData = {}

  constructor() {
    super()
  }

  setPosition(row, col) {
    this.dataset.row = row
    this.dataset.col = col
  }

  set data(cellData) {
    this.#cellData = cellData
    this.render()
  }

  render() {
    // @TODO: Render the cell based on the cell data
  }
}

customElements.define("game-cell", GameCell)

export { GameCell }
