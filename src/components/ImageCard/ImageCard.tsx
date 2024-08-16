import css from './ImageCard.module.css';
import { Image } from '../../App.types';

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
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
