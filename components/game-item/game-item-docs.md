---
lang: en
title:  \<game-item\> docs
css: game-item.css
---

<script type="module">
import {GameItem} from './GameItem.js'
import {DataViewer} from 'https://pathall.net/data-viewer/v2.0.0/DataViewer.js'
window.gameItem = document.querySelector('game-item')
</script>


<main>

## Example

A game item is an object that can be added to a player’s inventory.

A game cell can contain one item.

```html
<game-item key=ruby></game-item>
```

```{=html}
<game-item key=ruby></game-item>
```

## Attributes

## Methods

## Data

An item can have varied data associated with it, depending on the kind of item it is.

Items are identified by the `key` field (which is sometimes surfaced in the `DOM` as an attribute, so we don’t call it `id`). 

```{=html}
<data-viewer>
{
  "key": "ruby",
  "label": "Ruby",
  "emoji": "💎",
  "features": {
    "price": 500,
    "hueRotation": "240deg"
  },
  "tags": [
    "treasure",
    "gem"
  ]
}
</data-viewer>
```

For an catalog of items, see the [items](../../items/item-catalog.json) page.

## Events

No events yet.

## Rendering

As of now we are rendering items as a simple div with the item’s `emoji` as the text content.


## See also

</main>


