import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(images) &&
        images.map(image => {
          return (
            <li className={css.item} key={image.id}>
              <ImageCard onImageClick={onImageClick} image={image} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
