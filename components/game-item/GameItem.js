class GameItem extends HTMLElement {
  constructor(config) {
    super()
    this.config = config
  }
}

customElements.define("game-item", GameItem)
