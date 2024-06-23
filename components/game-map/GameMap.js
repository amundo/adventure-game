import { choice } from "../../modules/random.js"
import { GameCell } from "../game-cell/GameCell.js"
import {parseMap} from './parse-map.js'  // @TODO this should probably be in an editor or something
import { findIslands } from "./find-islands.js"

class GameMap extends HTMLElement {
  #mapData = {}

  constructor() {
    super()
  }

  static get observedAttributes() {
    return ["src"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      this.fetch(newValue)
    }
  }

  async fetch(url) {
    let response = await fetch(url)
    let {metadata, terrainCells} = await response.json()
    this.data = {metadata, terrainCells}
  }

  async connectedCallback() {
  }

  set data(mapData) {
    this.#mapData = mapData
    this.render()
  }

  get data() {
    return this.#mapData
  }

  get randomIsland(){
    return choice(this.islands)
  }

  render() {
    this.innerHTML = ""

    this.#mapData.terrainCells.forEach(terrainCell => {
      const gameCell = document.createElement("game-cell")
      gameCell.data = terrainCell
      this.append(gameCell)
    })
  }

  at({ x, y }) {
    return this.querySelector(`game-cell[x="${x}"][y="${y}"]`)
  }

  get cells() {
    return Array.from(this.querySelectorAll("game-cell"))
  }

  get randomCell() {
    return choice(this.cells)
  }

  neighborsOf(cell, diagonals = false) {
    const { x, y } = cell
    const directions = [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ]
    if (diagonals) {
      directions.push(
        { x: -1, y: -1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: 1, y: 1 },
      )
    }
    return directions
      .map((dir) => this.at({ x: x + dir.x, y: y + dir.y }))
      .filter(Boolean)
      .concat(cell)
  }

  changeNeighbors({ x, y, terrain }) {
    this.neighborsOf({ x, y }, true).forEach((cell) => {
      if (Math.random() < 0.8 && cell) {
        cell.terrain = terrain
        cell.render() // Re-render only the changed cell
      }
    })
  }

  place(entity, { x, y }) {
    let cell = this.at({ x, y })
    cell.append(entity)
  }

  addItem(item) {
    // Add item to the map
  }
}

customElements.define("game-map", GameMap)
export { GameMap }
