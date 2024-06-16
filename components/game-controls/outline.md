GameManager.js - the entry point of the game, initializes everything else.
  GameUi.js - this lays out the game interface as instructed by GameManager.
    GameBoard.js - the grid of cells.
    GameCell.js - each cell in the grid.
    GameControls.js - the controls that the user interacts with. also handles listening for key, etc events.
  EnemyCharacter.js - represents an enemy, placed on the board by the GameManager.
  GameItem.js - represents an item, placed on the board by the GameManager.
  PlayerCharacter.js - represents the player, placed on the board at the beginning of the game.