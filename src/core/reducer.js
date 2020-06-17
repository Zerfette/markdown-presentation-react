const reducer = ({ slides, currentSlide }, action) => {
  switch (action.type) {
    case 'ADD_SLIDE':
      slides = [...slides, 'New Slide']
      currentSlide = slides.length - 1
      return { slides, currentSlide }
    case 'SAVE_SLIDE':
      slides[currentSlide] = action.payload
      return { slides, currentSlide }
    case 'DELETE_SLIDE':
      if (slides.length > 1)
        slides = slides.filter((item, i) => i !== action.payload)
      if (currentSlide > 0) currentSlide--
      return { slides, currentSlide }
    case 'GO_TO_SLIDE':
      currentSlide = action.payload
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
