class GameItem extends HTMLElement {
  #itemData = {}
  static get observedAttributes() {
    return ["name", "price"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue == 'name') {
      this.#itemData.name = newValue
      this.render()
    }
  }

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

export {
  GameItem
}
