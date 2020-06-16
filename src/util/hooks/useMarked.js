import marked from 'marked'
import renderHTML from 'react-render-html'

const useMarked = (markdown) => renderHTML(marked(markdown))

export { useMarked }
