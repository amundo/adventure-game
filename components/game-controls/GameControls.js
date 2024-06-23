class GameControls extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <nav class="direction-buttons">
      <button data-direction=up class="up-control-button">Up</button>
      <button data-direction=left class="left-control-button">Left</button>
      <button data-direction=right class="right-control-button">Right</button>
      <button data-direction=down class="down-control-button">Down</button>
    </nav>
    `
    this.listen()
  }

  listen() {
    this.addEventListener("keydown", (e) => this.handleKeyDown(e))
    this.addEventListener("keyup", (e) => this.handleKeyUp(e))
    this.addEventListener("click", (e) => this.handleClick(e))
    this.addEventListener("touchend", (e) => this.handleTouchEnd(e))
  }

  handleKeyDown(keyDownEvent) {

  }

  handleKeyUp(keyUpEvent) {
    // Handle key up events
  }

  handleTouchEnd(event) {
    // Handle touch end events
  }

  handleClick(clickEvent) {
    let target = clickEvent.target
    if (!target.matches('button')) return
    switch(target.dataset.direction) {
      case target.matches('up'):
        this.gameBoard.dispatchEvent(new CustomEvent('move', { bubbles: true    }))
        break
      case target.matches('down'):
        this.gameBoard.dispatchEvent(new CustomEvent('move', { bubbles: true   }));
        break
      case target.matches('left'):
        this.gameBoard.dispatchEvent(new CustomEvent('move', { bubbles: true  }))
        break
      case target.matches('right'):
        this.gameBoard.dispatchEvent(new CustomEvent('move', { bubbles: true  } ))
        break
    }
    

  }

}

customElements.define("game-controls", GameControls)

export { GameControls }
