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
<game-cell terrain=water></game-cell>
```

```{=html}
<game-cell terrain=water></game-cell>
```


```html
<game-cell terrain=land</game-cell>
```

```{=html}
<game-cell terrain=land></game-cell>
```


## Attributes

No attributes. 

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

It is usually set dynamically by the parent component, `<game-map>`:

```html
<div id="example-div"></div>
<script type=module>
import {GameCell} from './GameCell.js'
let gameCell = document.createElement('game-cell')
document.querySelector('#example-div').append(gameCell)
gameCell.data = {
  "terrain": "land"
}
</script>
```

```{=html}
<div id="example-div"></div>
<script type=module>
import {GameCell} from './GameCell.js'
let gameCell = document.createElement('game-cell')
document.querySelector('#example-div').append(gameCell)
gameCell.data = {
  "terrain": "land"
}
</script>
```

## Events

No events yet.

## Layouts

No layouts yet. 

## See also



</main>

<script type="module">
import {GameCell} from './GameCell.js'

window.gameCell = document.querySelector('game-cell')
</script>
