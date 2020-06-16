import React, { useState } from 'react'

//LOCAL
import { SlideNav } from '@ui'
import { useMarked } from '@util/hooks'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const back = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1)
  const forward = () =>
    currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1)

  const [slides, setSlides] = useState(['Slide 1'])
  const addSlide = () => {
    setSlides([...slides, `Slide ${slides.length + 1}`])
    setCurrentSlide(slides.length)
    console.log('add')
  }
  const setSlide = (ev) => {
    const slidesCopy = [...slides]
    slidesCopy[currentSlide] = ev.target.value
    setSlides(slidesCopy)
  }
  const deleteSlide = slide => {
    slides.length > 1 &&
      setSlides(slides.filter(item => item !== slide))
    back()
  }
  const moveSlide = (from, to) => {
    setSlides(slides.move(from, to))
  }
  const goToSlide = (slide) => setCurrentSlide(slides.indexOf(slide))

  const isCurrentSlide = slide => slides[currentSlide] === slide

  const SlideDisplay = useMarked(slides[currentSlide])
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {SlideNav({ slides, addSlide, goToSlide, isCurrentSlide, deleteSlide })}
      </div>
      <div>
        <button onClick={back}>BACK</button>
        <textarea rows='6' value={slides[currentSlide]} onChange={setSlide} />
        <button onClick={forward}>FORWARD</button>
        {SlideDisplay}
      </div>
    </div>
  )
}

export default Home
