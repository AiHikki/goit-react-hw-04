import Modal from 'react-modal';
Modal.setAppElement('#root');

const ImageModal = ({ imgUrl, isOpen, close }) => {
  const customStyles = {
    content: {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundClip: 'padding-box',
      border: 'none',
    },
  };
  return <Modal onRequestClose={close} isOpen={isOpen} style={customStyles}></Modal>;
};

export default ImageModal;
