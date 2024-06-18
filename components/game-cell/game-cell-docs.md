---
lang: en
title:  \<game-cell\> docs
css: game-cell.css
---

<main>

## Example

A game cell is a single square on the game board. It can contain a player, an enemy, or an item. 

It also has a terrain, which can be land or water. 

```html
<game-cell terrain=land></game-cell>
```

```{=html}
<game-cell terrain=land></game-cell>
```


```html
<game-cell terrain=water></game-cell>
```

```{=html}
<game-cell terrain=water></game-cell>
```


## Attributes

* `terrain` - can be `land` or `water`
* `x` - the x-coordinate of the cell on the game board
* `y` - the y-coordinate of the cell on the game board

## Methods

* `set data(data)` - sets the cell’s data and causes rerender
* `get data()` - returns the cell’s data

## Data

A game cell’s data looks like:

```json
{
  "terrain": "land",
  "x": 0,
  "y": 0,
}
```

## Events

No events.

## Layouts

No layouts.

## See also



</main>

<script type="module">
import {GameCell} from './GameCell.js'

window.gameCell = document.querySelector('game-cell')
</script>
