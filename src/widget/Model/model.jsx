import { useEffect, useState } from 'react';
import './model.scss';

const Modal = ({ isOpen, onClose, videoUrl }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true); // Start the animation when modal opens
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleAnimationEnd = () => {
    setIsAnimating(false); // End animation state after animation finishes
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isAnimating ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <iframe
          width="560"
          height="320"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
