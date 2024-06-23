---
lang: en
title:  \<game-map\> docs
css: game-map-docs.css
---

<main>

The game map is responsible for layout out the map: placing cells, items,
and enemies as instructed by its parent component `<game-ui>`.

@TODO: add panning and zooming.

## Example

```html
<game-map></game-map>
```

```{=html}
<game-map></game-map>
```

## Attributes

- `size` - number of rows and columns in the map. Default is 25.

## Methods

## Data

Data is set to the component from its parent `<game-ui>` component.

## Events

## Layouts

## See also

</main>

<script type="module">
import {GameMap} from './GameMap.js'

window.gameMap = document.querySelector('game-map')
</script>
