import c from './ImageCard.module.css';

const ImageCard = ({ image: { alt_description, urls }, openModal }) => {
  return (
    <div className={c.thumb}>
      <img
        onClick={() => openModal({ alt: alt_description, imgUrl: urls.regular })}
        src={urls.small}
        alt={alt_description ?? 'Unrecognized image '}
      />
    </div>
  );
};

export default ImageCard;
