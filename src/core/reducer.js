const reducer = ({slides = [''], currentSlide = 0}, action) => {
  switch (action.type) {
    case 'ADD_SLIDE':
      slides = [...slides, `Slide ${slides.length + 1}`]
      currentSlide = slides.length
      return { slides, currentSlide }
    case 'SAVE_SLIDE':
      slides[currentSlide] = action.payload
      return { slides, currentSlide }
    case 'DELETE_SLIDE':
      if (slides.length > 1) slides = slides.filter((item) => item !== action.payload)
      if (currentSlide > 0) currentSlide--
      return { slides, currentSlide }
    case 'GO_TO_SLIDE':
      currentSlide = slides.indexOf(action.payload)
      return { slides, currentSlide }
    case 'NEXT_SLIDE':
      if (currentSlide < slides.length - 1) currentSlide++
      return { slides, currentSlide }
    case 'PREVIOUS_SLIDE':
      if (currentSlide > 0) currentSlide--
      return { slides, currentSlide }
    default:
      return { slides, currentSlide }
  }
}

export default reducer
