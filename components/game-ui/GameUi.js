import { GameControls } from "../game-controls/GameControls.js"
import { GameBoard } from "../game-board/GameBoard.js"

class GameUI extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
      <game-controls></game-controls>
      <game-board></game-board>
    `
    this.attachEvents()
  }

  attachEvents() {
    // Code to attach event listeners for UI components
  }

  // Method to load and update UI elements
  updateUI(data) {
    // Implementation
  }
}

customElements.define("game-ui", GameUI)
