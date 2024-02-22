import { useToggle } from '../../hooks/useToggle';
import ImageModal from '../ImageModal/ImageModal';

const ImageCard = ({ image: { alt_description, urls } }) => {
  const { isOpen, open, close } = useToggle(false);

  return (
    <div>
      <img onClick={open} src={urls.small} alt={alt_description} />
      <ImageModal close={close} isOpen={isOpen} alt={alt_description} imgUrl={urls.regular} />
    </div>
  );
};

export default ImageCard;
