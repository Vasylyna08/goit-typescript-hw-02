import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ photo, isModalOpen, closeModal }) => {
  return (
    <Modal
      overlayClassName={css.overlay}
      className={css.modal}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    >
      {photo && (
        <div className={css.imageContainer}>
          <img
            className={css.img}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
