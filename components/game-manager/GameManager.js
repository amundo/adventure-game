import { GameUi } from "../game-ui/GameUi.js"
import { PlayerCharacter } from "../player-character/PlayerCharacter.js"
// import { EnemyCharacter } from "../enemy-character/EnemyCharacter.js"
// import { GameItem } from "../game-item/GameItem.js"

class GameManager extends HTMLElement {
  #gameData = {}

  constructor() {
    super()
    this.innerHTML = `
      <game-ui></game-ui>
    `
    this.gameUI = this.querySelector("game-ui")
    this.playerCharacter = null
    this.enemies = []
    this.items = []
  }

  static get observedAttributes() {
    return ["src"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      let url = new URL(newValue, window.location.href).href
      this.fetch(url)
    }
  }

  async fetch(url) {
    try {
      let response = await fetch("sample-game.json")
      let data = await response.json()
      this.data = data
    } catch (error) {
      console.error(error)
    }
  }

  set data(data) {
    this.#gameData = data
    this.initializeGame(data)
  }

  get data() {
    return this.#gameData
  }

  render() {
    this.gameUI.data = this.#gameData.ui
    this.playerCharacter = new PlayerCharacter()
    this.playerCharacter.data = this.#gameData.player
    this.enemies = this.generateEnemies(this.#gameData.enemies)
    this.items = this.#gameData.items.map((item) => new GameItem(item))
    this.startGame()
  }

  generateEnemies(enemyDatas) {
    return enemyDatas.map((enemyData) => {
      let enemy = new EnemyCharacter()
      enemy.data = enemy
    })
  }

  startGame() {
    // Add player to the game board
    // this.gameUI.gameBoard.addCharacter(this.playerCharacter)
    // Add enemies to the game board
    // this.enemies.forEach((enemy) => this.gameUI.gameBoard.addCharacter(enemy))
    // Add items to the game board
    // this.items.forEach((item) => this.gameUI.gameBoard.addItem(item))
    // Additional game start logic
  }
}

customElements.define("game-manager", GameManager)

export { GameManager }
