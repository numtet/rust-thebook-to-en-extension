const createEnLink = (jpLink: string) => {
  return jpLink
    .replace('doc.rust-jp.rs', 'doc.rust-lang.org')
    .replace(/\/([^\/]*)-ja\//, (_match, p1) => `/${p1}/`)
}

const addLinkNode = () => {
  const link = document.createElement('a')
  link.href = createEnLink(window.location.toString())
  link.title = "Go to English page"
  link.ariaLabel = "Go to English page"
  link.target = "_blank"

  const icon = document.createElement('i')
  icon.id = "english-page-button"
  icon.className = "fa fa-language"

  link.appendChild(icon)

  const buttons = document.querySelector('div.right-buttons')
  buttons?.appendChild(link)
}

addLinkNode()
