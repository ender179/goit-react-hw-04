import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <button onClick={onClose} className={styles.closeButton}>X</button>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
      <p>Author: {image.user.name}</p>
      <p>{image.likes} likes</p>
      <p>{image.description}</p>
    </Modal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;