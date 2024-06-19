---
lang: en
title:  \<game-board\> docs
css: game-board-docs.css
---

<main>

The game board is responsible for layout out the board: placing cells, items,
and enemies as instructed by its parent component `<game-ui>`.

@TODO: add panning and zooming.

## Example

```html
<game-board></game-board>
```

```{=html}
<game-board></game-board>
```

## Attributes

- `size` - number of rows and columns in the board. Default is 25.

## Methods

## Data

Data is set to the component from its parent `<game-ui>` component.

## Events

## Layouts

## See also

</main>

<script type="module">
import {GameBoard} from './GameBoard.js'

window.gameBoard = document.querySelector('game-board')
</script>
