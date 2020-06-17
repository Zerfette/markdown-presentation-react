import marked from 'marked'
import renderHTML from 'react-render-html'
import hljs from 'highlight.js'

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
})

const useMarked = (markdown) => renderHTML(marked(markdown))

export { useMarked }
