import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import leftChevron from "../assets/left-arrow.svg"
import rightChevron from "../assets/right-arrow.svg"
import sliderData from "../data/sliderData"
import "./Slider.css"
import ImageModal from "../ImageModal/ImageModal"

export default function Slider() {

  const [sliderIndex, setSliderIndex] = useState(1)
  const [showModal, setShowModal] = useState(false)

  function toggleSlider(indexPayload) {
  //   if(sliderIndex + indexPayload > sliderData.length) {
  //     setSliderIndex(1)
  //   }
  //   else if(sliderIndex + indexPayload < 1) {
  //     setSliderIndex(sliderData.length)
  //   }
  //   else {
  //     setSliderIndex(sliderIndex + indexPayload)
  //   }
    setSliderIndex(state => {
      if(state + indexPayload > sliderData.length) {
        return 1
      }
      else if(state + indexPayload < 1) {
        return sliderData.length
      }
      else {
        return state + indexPayload
      }
    })
  }

useEffect(() => {
  const intervalID = setInterval(() => toggleSlider(1), 2000)
  return () => clearInterval(intervalID)
}, [])

  return (
    <>
      <p className="index-info">{sliderIndex} / {sliderData.length}</p>
      <div className="slider">
        <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
        <img
          onClick={() => setShowModal(true)}
          src={`./images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img" />
        <button
          onClick={() => toggleSlider(-1)}
          className="navigation-button prev-button">
          <img
            src={leftChevron}
            alt="previous-image" />
        </button>
        <button
          onClick={() => toggleSlider(1)}
          className="navigation-button next-button">
          <img
            src={rightChevron}
            alt="next-image" />
        </button>
      </div>
      {showModal && createPortal(<ImageModal closeModal={() => setShowModal(false)} sliderIndex={sliderIndex}/>, document.body)}
    </>
  )
}