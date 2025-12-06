import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(isOpen);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  React.useEffect(() => {
    if (!isOpen && isAnimating) {
      setIsAnimating(false);
    } else if (isOpen && !isAnimating) {
      setIsAnimating(true);
    }
  }, [isOpen, isAnimating]);

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    opacity: isAnimating ? (isOpen ? 1 : 0) : 1,
    transition: 'opacity 0.3s ease-in-out',
  };

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    opacity: isAnimating ? (isOpen ? 1 : 0) : 1,
    transition: 'opacity 0.3s ease-in-out',
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div>
          <div style={backdropStyle} onClick={handleBackdropClick}></div>
          <div style={modalStyle}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;