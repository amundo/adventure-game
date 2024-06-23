---
lang: en
title:  \<game-map\> docs
css: game-map-docs.css
---

<main>

The game map is responsible for laying out the terrain of the world. It also listens to its parent component, `<game-ui>`, which sends it updates on the positions of game entities.


@TODO: add panning and zooming.

## Example

```html
<game-map src=map-1.json></game-map>
```


```{=html}
<game-map  src=map-1.json></game-map>
```

## Attributes


- `size` - number of rows and columns in the map. Default is 25.

## Methods

## Data

Data is set to the component from its parent `<game-ui>` component.

In unusual circumstances (like this documentation page), the map can be set directly on the `set data(mapData)` setter. The map data looks like this:

```json
{
  "metadata": {
    "title": "Sample map"
  },
  "terrainCells": [
    {
      "terrain": "land",
      "x": 0,
      "y": 0
    },
    {
      "terrain": "land",
      "x": 1,
      "y": 0
    },
    {
      "terrain": "land",
      "x": 2,
      "y": 0
    },
    {
      "terrain": "land",
      "x": 3,
      "y": 0
    },
    …etc…
  ]
}
```

## Events

## Style



## See also

</main>

<script type="module">
import {GameMap} from './GameMap.js'

window.gameMap = document.querySelector('game-map')
</script>
