import Modal from 'react-modal';
import c from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
};

const ImageModal = ({ closeModal, modalIsOpen, alt, imgUrl }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <img className={c.image} src={imgUrl} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
