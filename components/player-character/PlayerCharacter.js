class PlayerCharacter extends HTMLElement {
  #playerData = {}
  constructor(config) {
    super()
    this.config = config
    this.attachEvents()
  }

  set data(playerData) {
    this.#playerData = playerData
    this.render()
  }

  get data() {
    return this.#playerData
  }

  attachEvents() {
    // Attach events specific to player character
  }
}

customElements.define("player-character", PlayerCharacter)
