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

  get terrain(){
    return this.#cellData.terrain
  }

  set terrain(terrain){
    this.#cellData.terrain = terrain
    this.setAttribute("terrain", terrain)
    this.render()
  }

  set gridColumn(gridColumn){
    this.#cellData.gridColumn = gridColumn
  }

  set gridRow(gridRow){
    this.#cellData.gridRow = gridRow
  }

  get gridColumn(){
    return this.#cellData.gridColumn
  }

  get gridRow(){
    return this.#cellData.gridRow
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
    let {gridColumn, gridRow} = this.#cellData

    this.style.gridColumn = gridColumn
    this.style.gridRow = gridRow

    // this.innerHTML = `<small>${gridRow}<br>${gridColumn}</small>`
  }
}

customElements.define("game-cell", GameCell)

export { GameCell }
