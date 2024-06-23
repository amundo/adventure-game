import { choice } from "../../modules/random.js"
import { GameCell } from "../game-cell/GameCell.js"
import {parseMap} from './parse-map.js'  // @TODO this should probably be in an editor or something
import { findIslands } from "./find-islands.js"

class GameMap extends HTMLElement {
  #mapData = { size: 25 }

  constructor() {
    super()
  }

  async connectedCallback() {
    await this.loadRandomMap()
  }

  async loadRandomMap(){
    const mapFileNames = Array.from({length:5}).map((_,i) => `map-${i+1}.txt`)
    let randomMapFileName = choice(mapFileNames)

    let randomMapUrl = new URL(`../game-map/${randomMapFileName}`, import.meta.url).href
    
    let response = await fetch(randomMapUrl)
    let text = await response.text()
    let map = parseMap(text)

    this.data = {
      metadata: {
        name: 'Random Map',
        description: 'A randomly generated map'
      }, 
      map
    }
  }

  set data(mapData) {
    this.#mapData = mapData
    this.render()
  }

  get data() {
    return this.#mapData
  }

  get randomIsland(){
    console.log(`looking for random island…`)
    console.log(`this.islands: ${this.islands}`)
    return choice(this.islands)
  }

  render() {
    this.innerHTML = "" // Clear previous content
    this.renderMap()
  }

  renderMap() {
    const size = this.#mapData.map.length

    const totalCells = size * size

    for (let i = 0; i < totalCells; i++) {
      const x = i % size
      const y = Math.floor(i / size)

      let terrain
      if (this.#mapData.map) {
        terrain = this.#mapData.map[y][x] === 0 ? "water" : "land"
      }
      const cellData = {
        gridColumn: x + 1,
        gridRow: y + 1,
        x,
        y,
        terrain,
      }

      const gameCell = document.createElement("game-cell")
      gameCell.data = cellData
      this.append(gameCell)
    }

    // this.islands = findIslands(this.data.map)
    //   .map(islandCells => islandCells.map(({ x:y, y:x }) => this.at({ x, y })))
    //   console.log(`finding ${this.islands.length} islands`)
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
