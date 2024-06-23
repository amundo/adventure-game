import { GameUi } from "../game-ui/GameUi.js"
import { PlayerCharacter } from "../player-character/PlayerCharacter.js"
import { EnemyCharacter } from "../enemy-character/EnemyCharacter.js"
import { GameItem } from "../game-item/GameItem.js"
import { MessageLog } from "../message-log/MessageLog.js"

class GameManager extends HTMLElement {
  #gameData = {}

  constructor() {
    super()
    this.innerHTML = `
      <game-ui></game-ui>
      <message-log></message-log>
    `
    this.gameUi = this.querySelector("game-ui")
    this.playerCharacter = null
    this.enemies = []
    this.items = []
    this.log('welcome to adventure game')
  }

  static get observedAttributes() {
    return ["src"]
  }

  log(message){
    let messageLog = this.querySelector("message-log")
    messageLog.addMessage(message)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      let url = new URL(newValue, window.location.href).href
      console.log(url)
      this.fetch(url)
    }
  }

  async fetch(url) {
    try {
      let response = await fetch(url)
      let data = await response.json()
      this.data = data
    } catch (error) {
      console.error(error)
    }
  }

  set data(data) {
    this.#gameData = data
    this.startGame(data)
  }

  get data() {
    return this.#gameData
  }

  render() {
    this.gameUi.data = this.#gameData.ui
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
    this.gameUi.gameBoard.place(this.playerCharacter, this.gameUi.gameBoard.randomIsland)
    // Add enemies to the game board
    // this.enemies.forEach((enemy) => this.gameUi.gameBoard.addCharacter(enemy))
    // Add items to the game board
    // this.items.forEach((item) => this.gameUi.gameBoard.addItem(item))
    // Additional game start logic
  }
}

customElements.define("game-manager", GameManager)

export { GameManager }
