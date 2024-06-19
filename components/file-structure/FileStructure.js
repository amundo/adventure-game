let camelCaseToSnakeCase = camel => 
  camel
    .replace(/([A-Z])/g, "-$1").toLowerCase()
    .slice(1)


class FileStructure extends HTMLElement {
  connectedCallback() {
    const text = this.textContent
    const lines = text
      .split("\n")
      .filter(line => line.trim())

    const root = document.createElement("ul")
    let currentParent = root
    const stack = [root]

    lines.forEach((line) => {
      if(!line.split("-").length === 3) {
      }

      let [depth, componentName, description] = line.split(/-/g)

      // trim depth name description
      depth = depth.length
      componentName = componentName.trim()

      description = description.trim()

      let snakeCase = camelCaseToSnakeCase(componentName.replace('.js', ``))

      let htmlHref = `./${snakeCase}/${snakeCase}.html`
      let jsHref = `./${snakeCase}/${componentName}`

      const listItem = document.createElement("li")
      listItem.dataset.depth = depth

      listItem.innerHTML = `<code>&lt;${snakeCase}></code> ${description} [<a href="${htmlHref}">html</a>] [<a href="${jsHref}">js</a>]`
      if (depth > stack.length - 1) {
        const newUl = document.createElement("ul")
        currentParent.lastElementChild.appendChild(newUl)
        currentParent = newUl
        stack.push(currentParent)
      } else {
        while (depth < stack.length - 1) {
          stack.pop()
        }
        currentParent = stack[stack.length - 1]
      }

      currentParent.appendChild(listItem)
    })

    this.innerHTML = ""
    this.appendChild(root)
  }
}

customElements.define("file-structure", FileStructure)

export { FileStructure }
