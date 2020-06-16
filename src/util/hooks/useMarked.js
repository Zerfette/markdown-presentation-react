import marked from 'marked'
import renderHTML from 'react-render-html'
import sanitizeHtml from 'sanitize-html'

const useMarked = (markdown) => renderHTML(marked(markdown))

export { useMarked }
