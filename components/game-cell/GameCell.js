class GameCell extends HTMLElement {
  #cellData = {}

  static get observedAttributes() {
    return ["terrain"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "terrain") {
      this.#cellData.terrain = newValue
      this.render()
    }
  }

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

  set terrain(terrain) {
    this.#cellData.terrain = terrain
    this.setAttribute("terrain", terrain)
  }

  get terrain() {
    return this.#cellData.terrain
  }

  render() {
    // @TODO: Render the cell based on the cell data
  }
}

customElements.define("game-cell", GameCell)

export { GameCell }
