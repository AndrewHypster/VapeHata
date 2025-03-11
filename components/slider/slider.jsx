'use client'
import React, { useState } from 'react';
import './slider.css'

const Slider = ({ bg, title, n = 2, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? groupedChildren.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === groupedChildren.length - 1 ? 0 : prev + 1));
  };

  const groupedChildren = [];
  for (let i = 0; i < children.length; i += n) {
    groupedChildren.push(children.slice(i, i + n));
  }

  const navBtns = () => {
    const btns = []
    for (let i=0; i < children.length/n; i++)
      btns.push(<button aria-label={`Слайд ${i+1}`} className={`slider-nav-btn-${currentSlide == i}`} onClick={() => setCurrentSlide(i)} key={i} />)
    return btns
  }

  return (
    <section className={`slider slider-${bg}`}>
      <h2 className='slider-title'>{title}</h2>
      <div className="slider-wrapper">
        <button className="slider-prev" onClick={prevSlide} aria-label="Попередній слайд">&larr;</button>
        
        <div className="slides">
          {groupedChildren.map((group, index) => (
            <figure className={`slide slide-${index == currentSlide}`} key={index}>
              {group.map((child, i) => (
                <figure key={i}>
                  <figcaption>{child}</figcaption>
                </figure>
              ))}
            </figure>
          ))}
        </div>

        <button className="slider-next" onClick={nextSlide} aria-label="Наступний слайд">&rarr;</button>
      </div>

      <nav className="slider-nav">
        {navBtns()}
      </nav>
    </section>
  )
}

export default Slider
