import { useEffect, useState } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAnimationComplete?: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, onAnimationComplete, children }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
      onAnimationComplete?.();
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`${styles.overlay} ${isOpen ? styles.overlayEnter : styles.overlayExit}`}
      onClick={onClose}
      onAnimationEnd={handleAnimationEnd}
    >
      <div 
        className={`${styles.modal} ${isOpen ? styles.modalEnter : styles.modalExit}`}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
