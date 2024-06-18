import { GameBoard } from "../game-board/GameBoard.js"
import { GameControls } from "../game-controls/GameControls.js"

class GameUi extends HTMLElement {
  #uiData = {}

  constructor() {
    super()
    this.innerHTML = `
      <game-controls></game-controls>
      <game-board></game-board>
    `
    this.gameBoard = this.querySelector("game-board")
    this.gameControls = this.querySelector("game-controls")
  }

  set data(uiData) {
    this.#uiData = uiData
    this.render()
  }

  get data() {
    return this.#uiData
  }

  render(config) {
    // Initialize UI elements based on config
    this.gameBoard.data = this.gameControls.initialize(config.controls)
  }
}

customElements.define("game-ui", GameUi)

export { GameUi }
