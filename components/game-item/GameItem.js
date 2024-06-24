class GameItem extends HTMLElement {
  #itemData = {}

  constructor() {
    super()
  }

  set data(itemData) {
    this.#itemData = itemData
    this.render()
  }


  set position({x, y}) {
    this.x = x
    this.y = y
    this.style.gridColumn = this.x + 1
    this.style.gridRow = this.y + 1
  }

  get position(){
    return {
      x: this.x,
      y: this.y,
      gridColumn: this.x + 1,
      gridRow: this.y + 1
    }
  }

  get data() {
    return this.#itemData
  }

  render() {
    this.innerHTML = this.#itemData.emoji 
  }
}

customElements.define("game-item", GameItem)

export {
  GameItem
}
