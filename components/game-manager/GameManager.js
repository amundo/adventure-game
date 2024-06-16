class GameManager extends HTMLElement {
  constructor() {
    super()
    this.gameBoard = null
    this.playerCharacter = null
    this.enemies = []
    this.items = []
  }

  connectedCallback() {
    this.loadConfig()
  }

  loadConfig() {
    fetch("config.json")
      .then((response) => response.json())
      .then((data) => this.initializeGame(data))
  }

  initializeGame(config) {
    this.gameBoard = new GameBoard(config.board)
    this.playerCharacter = new PlayerCharacter(config.player)
    this.enemies = config.enemies.map((enemy) => new EnemyCharacter(enemy))
    this.items = config.items.map((item) => new GameItem(item))
    this.startGame()
  }

  startGame() {
    // Start game logic
  }
}

customElements.define("game-manager", GameManager)
