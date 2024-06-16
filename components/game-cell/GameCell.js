class GameCell extends HTMLElement {
  constructor(config) {
    super()
    this.config = config
  }
}

customElements.define("game-cell", GameCell)
