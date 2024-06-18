class GameItem extends HTMLElement {
  #itemData = {}
  constructor() {
    super()
  }

  set data(itemData) {
    this.#itemData = itemData
    this.render()
  }

  get data() {
    return this.#itemData
  }

  render() {
    // @TODO: Render the item based on the item data
  }
}

customElements.define("game-item", GameItem)
