class PlayerCharacter extends HTMLElement {
  #playerData = {
    emoji: "😀",
  }

  constructor() {
    super()
    this.render()
  }

  set data(playerData) {
    this.#playerData = playerData
    this.render()
  }

  get data() {
    return this.#playerData
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

  move({x,y}){
    this.position = {x,y}
  }

  listen() {
    
  }

  render(){
    this.innerHTML = this.#playerData.emoji 
  }
}

customElements.define("player-character", PlayerCharacter)

export {
  PlayerCharacter
}