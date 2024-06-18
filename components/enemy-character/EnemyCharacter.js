class EnemyCharacter extends HTMLElement {
  #enemyData = {}
  constructor() {
    super()
  }

  set data(enemyData) {
    this.#enemyData = enemyData
    this.render()
  }

  get data() {
    return this.#enemyData
  }
}

customElements.define("enemy-character", EnemyCharacter)
