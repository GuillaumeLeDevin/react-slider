import "./ImageModal.css"

export default function ImageModal({closeModal, sliderIndex}) {
  return (
    <div
        className="modal-container"
        onClick={closeModal}>
        <img
        className="img-modal"
        src={`./images/img-${sliderIndex}.jpg`}
        alt="" />
    </div>
  )
}