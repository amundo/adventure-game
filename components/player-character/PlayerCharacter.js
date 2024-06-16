class PlayerCharacter extends HTMLElement {
  constructor(config) {
    super()
    this.config = config
    this.attachEvents()
  }

  attachEvents() {
    // Attach events specific to player character
  }
}

customElements.define("player-character", PlayerCharacter)
