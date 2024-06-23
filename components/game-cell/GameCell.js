class GameCell extends HTMLElement {
  #cellData = {
  }

  static get observedAttributes() {
    return ["terrain"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "terrain") {
      this.#cellData.terrain = newValue
    }
  }

  constructor() {
    super()
  }

  set data(cellData) {
    this.style.gridColumn = cellData.x + 1
    this.style.gridRow = cellData.y + 1
    this.setAttribute('terrain', cellData.terrain)
    this.#cellData = cellData
    this.render()
  }

  get data(){
    return this.#cellData
  }

  // get terrain(){
  //   return this.#cellData.terrain
  // }

  // set terrain(terrain){
  //   this.#cellData.terrain = terrain
  //   this.setAttribute("terrain", terrain)
  //   this.render()
  // }

  get neighbors(){
    return this.parentElement.neighborsOf(this, true)
  }
  
  render() {
    console.log(this.#cellData)
    this.setAttribute('terrain', this.#cellData.terrain)
    // this.style.gridColumn = this.gridColumn
    // this.style.gridRow = this.gridRow
  }
}

customElements.define("game-cell", GameCell)

export { GameCell }
