---
lang: en
title:  \<game-manager\> docs
css: game-manager.css
---

<main>

This component is the entry point of the game. It initializes everything else.


## Example

```html
<game-manager src=sample-game.json></game-manager>
```

```{=html}
<game-manager src=sample-game.json></game-manager>
```

## Attributes

* `src` - the URL of a JSON file that describes the game. The JSON file should have the following structure:

<!-- TODO: update this later -->
```json
{
  "rows": 10,
  "cols": 10,
  "player": {
    "row": 0,
    "col": 0
  },
  "enemies": [
    {
      "row": 1,
      "col": 1
    }
  ],
  "items": [
    {
      "row": 2,
      "col": 2
    }
  ]
}
```


</main>

<script type="module">
import {GameManager} frpom './GameManager.js'

window.gameManager = document.querySelector('game-manager')
</script>
