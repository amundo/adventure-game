class EnemyCharacter extends HTMLElement {
  constructor(config) {
    super()
    this.config = config
  }
}

customElements.define("enemy-character", EnemyCharacter)
