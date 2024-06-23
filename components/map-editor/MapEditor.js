import { GameMap } from "../game-map/GameMap.js"

class MapEditor extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
<!-- <manage-map></manage-map> -->
<aside class="sidebar">
<!-- <terrain-paintbox></terrain-paintbox> -->
<!-- <entity-paintbox></entity-paintbox> -->
</aside>    
<game-map></game-map>
    `
    this.listen()
  }

  async fetch(url){
    let response = await fetch(url)
    let data = await response.json()
    this.data = data
  }

  connectedCallback(){

  }

  static get observedAttributes(){
    return ["src"]
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == "src"){
      this.fetch(newValue)
    }
  }

  /*
  set data(data){
    this.whatever = data.whatever
    this.metadata = data.metadata
    this.render()
  }

  get data(){
    return {
      whatever: this.whatever,
      metadata: this.metadata
    }
  }
  */

  render(){
    // edit .innerHTML here
  }

  listen(){
    /* write event listeners here */
  }
}

export {MapEditor}
customElements.define('map-editor', MapEditor)
