import css from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.imgCard}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;
