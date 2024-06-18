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

  set data(cellData) {
    this.#cellData = cellData
    
    // @TODO: probably too much magic here
    Object.entries(cellData)
      .forEach(([key, value]) => {
        this.setAttribute(key, value)
      })
    this.render()
  }

  render() {
    this.style.gridColumn = this.#cellData.x
    this.style.gridRow = this.#cellData.y
  }
}

customElements.define("game-cell", GameCell)

export { GameCell }
