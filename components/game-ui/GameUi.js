import { GameMap } from "../game-map/GameMap.js"
import { GameControls } from "../game-controls/GameControls.js"
import { PlayerCharacter } from "../player-character/PlayerCharacter.js"

class GameUi extends HTMLElement {
  #uiData = {}

  constructor() {
    super()
    this.innerHTML = `
      <game-map></game-map>
      <game-controls></game-controls>
    `
    this.gameBoard = this.querySelector("game-map")
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
