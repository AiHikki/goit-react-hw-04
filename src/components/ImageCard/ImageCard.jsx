import c from './ImageCard.module.css';

const ImageCard = ({
  image: { alt_description, urls, user, likes, description, color },
  openModal,
}) => {
  return (
    <div className={c.thumb} style={{ backgroundColor: color }}>
      <img
        onClick={() =>
          openModal({ alt_description, imgUrl: urls.regular, user, likes, description })
        }
        src={urls.small}
        alt={alt_description ?? 'Unrecognized image'}
      />
    </div>
  );
};

export default ImageCard;
