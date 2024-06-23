class GameCell extends HTMLElement {
  #cellData = {
    gridColumn: 0,
    gridRow: 0,
    terrain: "water"
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

    this.#cellData = cellData
    
    // @TODO: probably too much magic here
    Object.entries(cellData)
      .forEach(([key, value]) => {
        this.setAttribute(key, value)
      })
      
    this.render()
  }

  get data(){
    return this.#cellData
  }

  get terrain(){
    return this.#cellData.terrain
  }

  set terrain(terrain){
    this.#cellData.terrain = terrain
    this.setAttribute("terrain", terrain)
    this.render()
  }

  get gridColumn(){
    return this.#cellData.gridColumn + 1
  }

  get gridRow(){
    return this.#cellData.y + 1
  }

  get x(){
    return this.#cellData.x
  }

  get y(){
    return this.#cellData.y
  }

  get neighbors(){
    return this.parentElement.neighborsOf(this, true)
  }
  
  render() {
    this.style.gridColumn = this.gridColumn
    this.style.gridRow = this.gridRow
  }
}

customElements.define("game-cell", GameCell)

export { GameCell }
