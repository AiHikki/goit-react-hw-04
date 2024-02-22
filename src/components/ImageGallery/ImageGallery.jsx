import ImageCard from '../ImageCard/ImageCard';
import c from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={c.gallery}>
      {images.map((image, i) => (
        <li key={i} className={c.item}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
