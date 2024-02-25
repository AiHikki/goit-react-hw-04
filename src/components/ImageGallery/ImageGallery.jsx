import ImageCard from '../ImageCard/ImageCard';
import c from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={c.list}>
      {images.map(image => (
        <li key={image.id} className={c.item}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
