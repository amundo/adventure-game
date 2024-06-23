class ManageMap extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
      <button class="upload">Upload</button>
      <div class="map-metadata">
        <input name="map-title" placeholder="Map title">
      </div>
      <button class="load-map">Download map</button>
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

  download(){
    let data = this.data
    let filename = this.getAttribute("filename") || "game-map.json"
    let blob = new Blob([JSON.stringify(data)], {type: "application/json"})
    let url = URL.createObjectURL(blob)
    let a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
  
  }

  render(){
    // edit .innerHTML here
  }

  listen(){
    /* write event listeners here */
  }
}

export {ManageMap}
customElements.define('manage-map', ManageMap)
