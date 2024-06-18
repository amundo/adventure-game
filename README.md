---
title: Adventure Game
author: Patrick Hall
---

This is a little game framework for making Zelda-style, top-down 2d adventure
games.

It is built mostly with
[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Design Goals

I have always wanted to make a language creation game, where you go around
trying to — well, different README, because this game framework is only a step
in that direction. I need to learn to make a game in this genre. I have tried
various times and failed. Hope springs eternal. Let’s go.

My design goals include:

- Make a game that is fun to play.
- Make it possible to easily customize the game.
- Make it possible to easily create new games.
- Learn as much as possible about game development in the process.

Here is the first horrible prototype I built:

<https://ruphus.com/island-exploration/island-exploration.html>

As you can see, this game enables:

- Moving around a grid.
- Collision detection.
- Automatically generated islands.
- Randomly placed enemies.
- Randomly placed items.
- A player character.
- Enemy characters.
- Items.
- A game board.
- A game UI.

That’s about it so far.

As they say, throw the first one away. (I will probably throw this README away too.)


## Redesign

Here’s my current hierarchy of components:

- `GameManager.js` - the entry point of the game, initializes everything else.
  - `GameUi.js` - this lays out the game interface as instructed by GameManager.
    - `GameBoard.js` - the grid, generates a matrix of cells.
      - `GameCell.js` - each cell in the grid.
    - `GameControls.js` - the controls that the user interacts with. also handles listening for key, etc events.
  - `EnemyCharacter.js` - represents an enemy, placed on the board by the GameManager.
  - `GameItem.js` - represents an item, placed on the board by the GameManager.
  - `PlayerCharacter.js` - represents the player, placed on the board at the beginning of the game.


And here’s the responsive visual layout I have in mind:

<img src=images/responsive-layout.png alt="Layout showing desktop and mobile versions of game">


